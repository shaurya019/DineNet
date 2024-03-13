import React from 'react'
import EmptyOrder from '@/assets/icons/EmptyOrder';

const EmptyOrderPage = () => {
  return (
    <div className='flex flex-col items-center'>
      <h3  className='text-xl font-semibold mt-[46px] text-blue-pantone'>Track all your orders here !</h3>
      <EmptyOrder />
      <h5  className='text-xs font-semibold mt-[26px] text-center text-grey-dark'>No orders at the moment<br /><span  className='text-sm text-blue-pantone'>We're ready whenever you place an order.</span></h5>
    </div>
  )
}

export default EmptyOrderPage
