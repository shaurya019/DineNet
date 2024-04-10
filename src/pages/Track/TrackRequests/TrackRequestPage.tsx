import React, { useEffect, useState } from 'react'
import BottomSubmit from '@/atomicComponents/BottomSubmit';
import Nav from '@/components/Navbar';
import {ProgressComp} from '@/components/Progress/ProgressComp'
import { useLocation } from 'react-router-dom';
import {useGetComplimentaryProductData} from '@/hooks/useGetComplimentaryProductData'
import {RequestStatusComp} from '@/components/RequestStatus/RequestStatusComp'
import Loader from "@/atomicComponents/Loader";

export const TrackRequestPage = () => {
  const [status,setStatus]  = useState('0')
  const location = useLocation();
  const { Order } = location.state || {};

  const { data = [], isLoading } = useGetComplimentaryProductData(Order!);
  console.log(data);

  useEffect(()=>{
    if(data!=null  && data.length > 0){
      console.log(data);
      if(data.status!==null){
        console.log(data.status);
        if(data.status==="PLACED"){
          setStatus("0");
        } else if(data.status==="COMPLETED"){
          setStatus("2");
        }else{
          setStatus("1");
        }
      }
    }
  },[data]);

  if (isLoading) return (
    <div className="flex flex-1 items-center justify-center h-screen">
      <Loader />
    </div>
  ); 


  return (
    <div>
    <Nav title="Request Details"  show="True" showEmpty="False"/> 
    <div className='py-9 flex flex-row bg-greenCyan text-white justify-evenly items-center'>
    <div className='flex-col'>
       <h3 className='font-bold text-xl'>Completion Time</h3>
       <h3 className='font-semibold text-xl'>09:00 PM</h3>
       </div>
       <div className="h-12 border-l border-gray-300"></div>
       <div className='flex-col'>
       <h3 className='font-bold text-xl'>STATUS</h3>
       <h3 className='font-semibold text-xl'>{data.status}</h3>
    </div>  
    </div>
    <div className='mt-7'>
    <RequestStatusComp message={data.description} title={data.product_name ? data.product_name : "category"} />

    </div>
    <div className='mt-7 mb-20'>
    <ProgressComp one="Request Placed" two="Request Accepted " third="Completed" value={status}/>
    </div>
   <BottomSubmit Heading="Back To Home" path="RestaurantLandingPage"/>
</div>
  )
}


