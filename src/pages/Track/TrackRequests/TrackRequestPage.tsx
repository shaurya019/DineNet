import React from 'react'
import BottomSubmit from '@/atomicComponents/BottomSubmit';
import Nav from '@/components/Navbar';
import {ProgressComp} from '@/components/Progress/ProgressComp'
import { useLocation } from 'react-router-dom';
import {RequestStatusComp} from '@/components/RequestStatus/RequestStatusComp'

export const TrackRequestPage = () => {
  const location = useLocation();
  const { category, requestText } = location.state || {};
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
       <h3 className='font-semibold text-xl'>Accepted</h3>
    </div>  
    </div>
    <div className='mt-7'>
    <RequestStatusComp message={requestText} title={category}/>
    </div>
    <div className='mt-7 mb-20'>
    <ProgressComp one="Request generated" two="Request Accepted " third="Completed" value="1"/>
    </div>
   <BottomSubmit Heading="Back To Home" path="RestaurantLandingPage"/>
</div>
  )
}


