import React from 'react'
import Nav from '@/components/Navbar';
import BottomSubmit from '@/atomicComponents/BottomSubmit';
import RequestConfirm from "@/assets/icons/RequestConfirmation"

export const KitchenTimePage = () => {
  return (
    <div>
    <Nav title="Off Timing"  show="False" showEmpty="False"/> 
    <div className='flex flex-col mt-11 mb-20 justify-center items-center'>
        <h2 className='text-center font-semibold text-red-warm text-2xl'>Sorry but the kitchen <br />staff is asleep!!</h2>
     <RequestConfirm />
     <h4 className='text-sm font-normal text-green-willam'>Try ordering during our kitchen timings</h4>
     <h4 className='text-sm font-normal text-green-willam'>10 am - 10 pm</h4>
    </div>
   <BottomSubmit Heading="Proceed" path="RestaurantLandingPage"/> 
</div>
  )
}

