import React, { useEffect, useState } from 'react';
import EmptyOrder from '@/assets/icons/EmptyOrder';
import ToastMessage from '@/atomicComponents/Toast';

const EmptyOrderPage = () => {
  const persistUserData = window.localStorage.getItem("persist:user");
  const userData = JSON.parse(persistUserData!);
  const loggedIn = userData?.loggedIn;

  const [user,setUser] = useState(loggedIn);

  return (
    <>
      <div className='flex flex-col items-center'>
        <h3 className='text-xl font-semibold mt-[46px] text-blue-pantone'>Track all your orders here !</h3>
        <EmptyOrder />
        <h5 className='text-xs font-semibold mt-[26px] text-center text-grey-dark'>No orders at the moment<br /><span className='text-sm text-blue-pantone'>We're ready whenever you place an order.</span></h5>
      </div>
     <div>
     {user && <ToastMessage head1='Please Login' delay={5000} />}
     </div>
    </>
  )
}

export default EmptyOrderPage;
