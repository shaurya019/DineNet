import React, { useEffect, useState } from 'react';

export const ErrorToast = () => {
  const error = localStorage.getItem('error');
 
  const [isNotify, setIsNotify] = useState('');

  useEffect(() => {
    console.log('Running useEffect');
    console.log('Error in useEffect:', error);
    if (error) {
      console.log('Setting isNotify:', error);
      setIsNotify(error);
    }
  }, [error]);

  setTimeout(()=>{
  setIsNotify('');
  },10000)

  return (
    <div>
      <h1>{isNotify && 'Test'}</h1>
      {/* <h1>{isNotify?}</h1>
      <h1>{isNotify?.message}</h1> */}
    </div>
  );
};

