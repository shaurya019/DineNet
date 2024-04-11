import React, { useEffect, useState } from 'react';
import EmptyRequest from '@/assets/icons/EmptyRequest';
import ToastMessage from '@/atomicComponents/Toast';

const EmptyRequestPage = () => {
  const persistUserData = localStorage.getItem("persist:user");
  const userData = JSON.parse(persistUserData!);
  const loggedIn = userData?.loggedIn;

  const [user,setUser] = useState(loggedIn);
  return (
    <div className='flex flex-col items-center'>
    <h3  className='text-xl font-semibold mt-[46px] text-center text-blue-pantone'>Keep an eye on your Requests here !</h3>
    <EmptyRequest />
    <h5  className='text-xs font-semibold mt-[26px] text-center text-grey-dark'>Currently, there are no requests at the moment.<br /><span  className='text-sm text-blue-pantone'>Feel free to check back later!</span></h5>
    <div>
     {user && <ToastMessage head1='Please Login' delay={5000} />}
     </div>
  </div>
  )
}

export default EmptyRequestPage
