import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '@/components/Navbar';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import BottomSubmit from '@/atomicComponents/BottomSubmit';
import { ProgressComp } from '@/components/Progress/ProgressComp';
import { ItemStatusComp } from '@/components/ItemStatus/ItemStatusComp';
import { useGetOrderedDetails } from '@/hooks/useGetOrderedDetails';
import Loader from "@/atomicComponents/Loader";
import { usePostCancelOrder } from '@/hooks/usePostCancelOrder'
import { usePostWantBill } from '@/hooks/usePostWantBill';
import { AlertType, showAlert } from "@/service/Slice/alertSlice";
import { CustomAlert } from '@/components/CustomAlert/CustomAlert';

export const TrackOrderPage = () => {
  const location = useLocation();
  const { id } = location.state || {};
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [isWithin300Seconds, setIsWithin300Seconds] = useState(false);
  const [isTimeCalculated, setIsTimeCalculated] = useState(false);
  // const [isTimeDisableCalculated, setIsTimeDisableCalculated] = useState(false);
  const { data = {}, isLoading } = useGetOrderedDetails(id);
  const { mutateAsync: cancelOrder } = usePostCancelOrder(id);
  const { mutateAsync: getBill } = usePostWantBill(id);
  const [load, setLoad] = useState(false);
  const [disable, setDisable] = useState(false);
  const [cancelOpen, setCancelOpen] = useState(false);
  const [wantBillOpen, setWantBillOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (data?.created_at) {
        const createdAtDate = new Date(data.created_at);
        const now = new Date();
        const differenceInSeconds = (now.getTime() - createdAtDate.getTime()) / 1000;

        if (differenceInSeconds < 30) {
          setIsWithin300Seconds(true);
        } else {
          setIsWithin300Seconds(false);
        }
        console.log("COMING WITH BILL");
        if (data?.bill_requested_at && data?.bill_requested_at !== null) {
          console.log("BILL DATE", data?.bill_requested_at);
          const createdAtDate = new Date(data.bill_requested_at);
          const now = new Date();
          console.log("created DATE", createdAtDate);
          const differenceInSeconds = (now.getTime() - createdAtDate.getTime()) / 1000;
          console.log("differenceInSeconds DATE", differenceInSeconds);
          if (differenceInSeconds < 600) {
            setDisable(true);
          } else {
            setDisable(false);
          }
        }
        if (!isTimeCalculated) {
          setIsTimeCalculated(true);
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [data.created_at, data.bill_requested_at, isTimeCalculated]);


  const handleCreateCancelOrderAlert = async () => {
    try {
      setLoad(true);
      await cancelOrder();
      navigate('/orderHistory');
      setLoad(false);
      console.log('Order cancelled successfully');
    } catch (error) {
      console.error('Error cancelling order:', error);
    }
  };

  const handleCloseCancelOrderAlert = () => {
    setCancelOpen(false);
  };

  const handleCreateWantBillAlert = async () => {
    try {
      setLoad(true);
      await getBill();
    } catch (error) {
      setWantBillOpen(false);
      setLoad(false);
      console.log('Got BILL successfully');
      dispatch(showAlert({
        message: "Try after some time...",
        type: AlertType.success,
      }));
    } finally {
      setWantBillOpen(false);
      setLoad(false);
      setDisable(true);
      console.log('Got BILL successfully');
      dispatch(showAlert({
        message: "We will be serving the bill soon...",
        type: AlertType.success,
      }));
    }
  };

  const handleCloseWantBillAlert = () => {
    setWantBillOpen(false);
  };


  const handleCancelOrder = () => {
    setCancelOpen(true);
  };

  const handleWantBill = () => {
    setWantBillOpen(true);
  }



  if (isLoading || !isTimeCalculated || load) {
    return (
      <div className="flex flex-1 items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <Nav title="Track Order" show="True" showEmpty="False" />
      <div className='py-9 flex flex-row bg-greenCyan text-white justify-evenly items-center'>
        <div className='flex-col'>
          <h3 className='font-bold text-xl'>{data.client?.client_title}</h3>
        </div>
        <div className="h-12 border-l border-gray-300"></div>
        <div className='flex-col'>
          <h3 className='font-bold text-xl'>STATUS</h3>
          <h3 className='font-semibold text-xl'>{data.status}</h3>
        </div>
      </div>
      <div className='mt-7'>
        <ItemStatusComp item={data} />
      </div>
      <div className='mt-7 '>
        <ProgressComp one="Order Placed" two="Order Accepted" third="Completed" value={data.status} />
      </div>
      {isWithin300Seconds ?
        <div className='flex flex-row justify-between items-center mb-20 mx-[22px] text-xs'>
          <h4 className='text-grey font-medium'>Cancel or change Order?</h4>
          <button className='text-red-warm font-semibold' onClick={handleCancelOrder}>Cancel Order</button>
        </div>
        :
        <div className='flex flex-row justify-between items-center mb-20 mx-[22px] text-xs'>
          <h4 className='text-grey font-medium'>Want bill?</h4>
          <button className={`border ${disable ? 'border-grey' : 'border-blue-bright'} rounded p-1`}
            onClick={disable ? () => { } : handleWantBill}
          > <h4 className={`font-semibold ${disable ? 'text-grey' : 'text-blue-bright'}`}>Check Bill</h4></button>
        </div>
      }
      {cancelOpen && (
        <CustomAlert
          title="Cancel Order"
          perform="Cancel order"
          isOpen={cancelOpen}
          message="Are you sure you want to cancel the order?"
          onClose={handleCloseCancelOrderAlert}
          onSuccess={handleCreateCancelOrderAlert}
        />
      )}
      {wantBillOpen && (
        <CustomAlert
          title="Want Bill"
          perform="Want Bill"
          isOpen={wantBillOpen}
          message="Are you sure you want the bill?"
          onClose={handleCloseWantBillAlert}
          onSuccess={handleCreateWantBillAlert}
        />
      )}
      <BottomSubmit Heading="Back To Home" path="RestaurantLandingPage" />
    </div>
  )
};

export default TrackOrderPage;
