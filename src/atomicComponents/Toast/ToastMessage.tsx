import React, { useState, useEffect } from 'react';
import { Cross } from '@/assets/icons/Cross';
import { Error } from '@/assets/icons/Error';

interface ToastMessageProps {
  head1: string;
  delay: number;
}

export const ToastMessage: React.FC<ToastMessageProps> = ({ head1, delay }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const close = () => {
    delay = 0;
    setIsVisible(false);
  };

  return isVisible ? (
    <div className='w-full fixed bottom-5 left-0 flex justify-center items-center'>
      <div className="h-54 w-full mx-3  bottom-5 transform bg-red-cream border border-red-bright p-4 rounded-md shadow-md ">
        <div className='flex flex-row justify-between items-center'>
          <div className='flex h-[34px] w-9 bg-red-bright rounded border justify-center items-center'>
            <Error />
          </div>
          <div className='flex flex-col px-1'>
            <h5 className='text-xs text-grey-darkish'>Unauthorised Access:</h5>
            <h5 className='text-xs text-grey-darkish'>Please log in to view your order history.</h5>
          </div>
          <div onClick={close}>
            <Cross className="fill-grey-cross" />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
