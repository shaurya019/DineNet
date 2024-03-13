
import React from 'react'
import Nav from '@/components/Navbar';
import BottomSubmit from '@/atomicComponents/BottomSubmit';
import {ProgressComp} from '@/components/Progress/ProgressComp'
import {ItemStatusComp} from '@/components/ItemStatus/ItemStatusComp'

export const TrackOrderPage = () => {
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
       <h3 className='font-semibold text-xl'>PREPARING</h3>
    </div>  
    </div>
    <div className='mt-7'>
    <ItemStatusComp />
    </div>
    <div className='mt-7 mb-20'>
    <ProgressComp one="Request generated" two="Request Accepted " third="Completed" value="0"/>
    </div>
   <BottomSubmit Heading="Back To Home" path="RestaurantLandingPage"/>
</div>
  )
}


