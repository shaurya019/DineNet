import { AlertType, clearAlert, showAlert } from "@/service/Slice/alertSlice";
import { RootState } from "@/service/store/cartStore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Error } from '@/assets/icons/Error';
import { Cross } from '@/assets/icons/Cross';

export const Alert = () => {
  const alert = useSelector((state: RootState) => state.alert);
  const dispatch = useDispatch();
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (alert.showAlert) {
      if (timer) {
        clearTimeout(timer);
      }
      setTimer(
        setTimeout(() => {
          dispatch(clearAlert({}));
          setTimer(null);
        }, 3000)
      );
    }
  }, [alert.showAlert]);

  const handleTouchStart = () => {
    if (timer) {
      clearTimeout(timer);
    }
  };

  const handleTouchEnd = () => {
    if (alert.showAlert) {
      setTimer(
        setTimeout(() => {
          dispatch(clearAlert({}));
          setTimer(null);
        }, 3000)
      );
    }
  };

  if (!alert.showAlert) return null;
  return (
    <div
      className={`w-[90vw] flex min-h-10 items-center ${alert.type === AlertType.error || alert.type === AlertType.login ? "flex-row justify-between" : "justify-center"} z-10 fixed bottom-20  border ml-[5vw] rounded px-2 
           ${alert.type === AlertType.error || alert.type === AlertType.login
          ? 'bg-red-cream border-red-bright'
          : alert.type === AlertType.info
            ? 'bg-blue-500'
            : alert.type === AlertType.success
              ? 'bg-white border-green-willam'
              : 'bg-white border-green-willam'
        }
    `}
      onMouseEnter={handleTouchStart}
      onMouseLeave={handleTouchEnd}
    >

      {alert.type === AlertType.error || alert.type === AlertType.login ? <div className='flex h-[34px] w-9 bg-red-bright rounded border justify-center items-center'>
        <Error />
      </div> : ''}

      {alert.type === AlertType.login ?

        <div className='flex flex-col px-1'>
          <h5 className='text-xs text-left text-grey-darkish font-semibold'>Unauthorised Access:<br/><span className="font-medium">Please log in to view</span></h5>
        </div>
        :
        <p
          className={`text-md text-ellipsis overflow-hidden whitespace-nowrap 
        ${alert.type === AlertType.error
              ? 'text-grey-darkish'
              : alert.type === AlertType.info
                ? 'text-grey-darkish'
                : alert.type === AlertType.success
                  ? 'text-green-willam'
                  : 'text-grey-darkish'
            }
`}
        >
          {alert.message}
        </p>
      }

      {alert.type === AlertType.error || alert.type === AlertType.login ? <div> <Cross className="fill-grey-cross" /></div> : ''}
    </div>
  );

};
