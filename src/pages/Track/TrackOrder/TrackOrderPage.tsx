
import {useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom';
import Nav from '@/components/Navbar';
import BottomSubmit from '@/atomicComponents/BottomSubmit';
import {ProgressComp} from '@/components/Progress/ProgressComp'
import {ItemStatusComp} from '@/components/ItemStatus/ItemStatusComp'
import { useGetOrderedDetails } from '@/hooks/useGetOrderedDetails';
import Loader from "@/atomicComponents/Loader";


export const TrackOrderPage = () => {
  const location = useLocation();
  const { id } = location.state || {};
  
  
  const [status,setStatus]  = useState('0')
  const { data = [], isLoading } = useGetOrderedDetails(id);

  useEffect(()=>{
    console.log(data);
    if(data!=null  && data.length > 0){
      console.log(data);
      if(data[0].status!==null){
        console.log(data[0].status);
        if(data[0].status==="PLACED"){
          setStatus("0");
        } else if(data[0].status==="COMPLETED"){
          setStatus("2");
        }else{
          setStatus("1");
        }
      }
    }
  },[data]);


  if(isLoading) return (
    <div className="flex flex-1 items-center justify-center h-screen">
      <Loader />
    </div>
  ); 
  
  return (
    <div>
    <Nav title="Track Order"  show="True" showEmpty="False"/> 
    <div className='py-9 flex flex-row bg-greenCyan text-white justify-evenly items-center'>
    <div className='flex-col'>
       <h3 className='font-bold text-xl'>ETA</h3>
       <h3 className='font-semibold text-xl'>09:00 PM</h3>
       </div>
       <div className="h-12 border-l border-gray-300"></div>
       <div className='flex-col'>
       <h3 className='font-bold text-xl'>STATUS</h3>
       <h3 className='font-semibold text-xl'>{data.status}</h3>
    </div>  
    </div>
    <div className='mt-7'>
    <ItemStatusComp item={data}/>
    </div>
    <div className='mt-7 mb-20'>
    <ProgressComp one="Order Placed" two="Order Accepted" third="Completed" value={status}/>
    </div>
   <BottomSubmit Heading="Back To Home" path="RestaurantLandingPage"/>
</div>
  )
}


