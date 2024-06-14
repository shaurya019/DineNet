import TaxCharges from '@/components/TaxCharges'
import Nav from '@/components/Navbar';
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useGetOrderedDetails } from '@/hooks/useGetOrderedDetails';
import Loader from "@/atomicComponents/Loader";
import StripeComponent from '@/components/ContainerCart';
import BottomSubmit from '@/atomicComponents/BottomSubmit';

// Define the type for the formattedAmountBreakup state
type FormattedAmountBreakup = {
  [key: string]: number;
};

export const BillPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = location.state || {};

  const [status, setStatus] = useState('0');
  const [formattedAmountBreakup, setFormattedAmountBreakup] = useState<FormattedAmountBreakup>({});
  const { data = {}, isLoading } = useGetOrderedDetails(id);

  useEffect(() => {
    const formatBreakupKeys = (breakup: any) => {
      const formattedBreakup: FormattedAmountBreakup = {};
      Object.keys(breakup).forEach((key) => {
        const formattedKey = key.replace(/_/g, ' ').toUpperCase();
        formattedBreakup[formattedKey] = breakup[key];
      });
      return formattedBreakup;
    };

    if (data?.total_amount_breakup) {
      const formattedBreakup = formatBreakupKeys(data.total_amount_breakup);
      setFormattedAmountBreakup(formattedBreakup);
    }
  }, [data]);

  const handleButtonClick = () => {
    navigate('/trackOrder', { replace: true, state: { id } });
  };


  if (isLoading) return (
    <div className="flex flex-1 items-center justify-center h-screen">
      <Loader />
    </div>
  );

  return (
    <div>
      <Nav title="Bill Details" show="True" showEmpty="False" />
      <StripeComponent title="Bill Details" />
      <div className="w-full h-[42px] px-5 font-bold text-blue-oxford flex flex-row items-center justify-between">
        <h4 className="text-[12px]">Item Total :</h4>
        <h4 className="text-[14px]">
          <span>&#8377;</span>{formattedAmountBreakup["AMOUNT"]}
        </h4>
      </div>
      <hr className="bg-silver mx-3 my-3" />
      <div className="overflow-x-auto px-5">
        <table className="w-full">
          <tbody>
            {Object.keys(formattedAmountBreakup).map((key, i) => {
              if (key !== "AMOUNT" && key !== "TOTAL AMOUNT") {
                return (
                  <tr key={i} className="flex flex-row justify-between mb-3">
                    <td className="font-normal text-[12px]">{key} :</td>
                    <td className="font-semibold text-grey text-[14px]">
                      <span>&#8377;</span>{formattedAmountBreakup[key]}
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
      <hr className="bg-silver mx-3 my-3" />
      <div className="w-full h-[42px] px-5 font-bold text-blue-oxford flex flex-row items-center justify-between">
        <h4 className="text-[12px]">To Pay :</h4>
        <h4 className="text-[14px]">
          <span>&#8377;</span>{formattedAmountBreakup["TOTAL AMOUNT"]}
        </h4>
      </div>
      <div className="flex justify-center items-center my-4">
        <button onClick={handleButtonClick} className='h-7 w-56 border border-green-willam rounded-md border-2 flex items-center justify-center'>
          <h5 className='text-green-willam text-center font-medium'>Track Order</h5>
        </button>
      </div>
      <BottomSubmit Heading="Back To Home" path="RestaurantLandingPage" />
    </div>
  )
}

