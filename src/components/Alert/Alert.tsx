import { AlertType, clearAlert, showAlert } from "@/service/Slice/alertSlice";
import { RootState } from "@/service/store/cartStore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  const color = (() => {
    switch (alert.type) {
      case AlertType.error:
        return "red-500";
      case AlertType.info:
        return "blue-500";
      case AlertType.success:
        return "green-500";
      case AlertType.info:
      default:
        return "yellow-500";
    }
  })();

  if (!alert.showAlert) return;
  return (
    <div
      className={`w-[90vw] flex min-h-10 items-center justify-center z-10 fixed bottom-20 border bg-white ml-[5vw] rounded px-2 bg-${color}`}
    >
      <p
        className={`text-md text-ellipsis overflow-hidden whitespace-nowrap text-white`}
      >
        {alert.message}
      </p>
    </div>
  );
};
