import React from 'react'
import Nav from '@/components/Navbar';
import BottomSubmit from '@/atomicComponents/BottomSubmit';
import PaymentFailed from '@/assets/icons/PaymentFailed'

export const PaymentFailedPage = () => {
  return (
    <>
        <Nav title="Payment Failed"  show="False" showEmpty="False"/>
        <div className='flex flex-col justify-center items-center mb-10'>
            <h3 className="font-semibold text-custom-red text-2xl text-center">Oops!! </h3>
            <h4 className="font-light text-custom-empty-title text-sm mt-6 text-center">Payment Failed, for room number 06</h4>
            <h4 className="font-light text-custom-empty-title text-sm mb-6 text-center">Please try again..</h4>
            <PaymentFailed />
            </div>
       <BottomSubmit Heading="Retry payment" path=""/> 
    </>
  )
}

