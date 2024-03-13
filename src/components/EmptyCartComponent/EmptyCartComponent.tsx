import React from 'react'
import BottomSubmit from '@/atomicComponents/BottomSubmit';
import PersonIcon from '../../assets/icons/Person';

export const Empty = () => {
  return (
    <div className="flex flex-col">
    <div className='mx-10 mt-10 mb-1 justify-center items-center text-center'>
    <h3 className='text-custom-orange font-semibold text-2xl'>Good food is always cooking!!</h3>
  </div>
  <div className='flex justify-center items-center'>
    <PersonIcon />
  </div>
  <div className='mx-10 mt-5 mb-20 justify-center items-center text-center'>
    <h3 className='font-normal text-custon-add-green text-sm'>Browse menu to add items to cart</h3>
  </div>
  <BottomSubmit Heading="Home" path="RestaurantLandingPage"/>
   </div>
  )
}

