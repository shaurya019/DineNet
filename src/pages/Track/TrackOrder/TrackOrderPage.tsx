
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Nav from '@/components/Navbar';
import BottomSubmit from '@/atomicComponents/BottomSubmit';
import { ProgressComp } from '@/components/Progress/ProgressComp'
import { ItemStatusComp } from '@/components/ItemStatus/ItemStatusComp'
import { useGetOrderedDetails } from '@/hooks/useGetOrderedDetails';
import Loader from "@/atomicComponents/Loader";


export const TrackOrderPage = () => {
  const location = useLocation();
  const { id } = location.state || {};

  const [status, setStatus] = useState('0')
  const { data = {}, isLoading } = useGetOrderedDetails(id);



  if (isLoading) return (
    <div className="flex flex-1 items-center justify-center h-screen">
      <Loader />
    </div>
  );

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
      <div className='mt-7 mb-20'>
        <ProgressComp one="Order Placed" two="Order Accepted" third="Completed" value={data.status} />
      </div>
      <BottomSubmit Heading="Back To Home" path="RestaurantLandingPage" />
    </div>
  )
}


