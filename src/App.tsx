import React, { useEffect, useState } from "react";
import { initializeFirebase } from "@utils/firebaseUtils";
import RecaptchaContainer from "@components/RecaptchaContainer";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { PersistGate } from "redux-persist/integration/react";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Provider } from "react-redux";
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { persistor, store } from "./service/store/cartStore";
import Alert from "./components/Alert";
import KitchenAlert from "@/components/KitchenAlert";
import { useDispatch } from "react-redux";
import { AlertType, showAlert } from "@/service/Slice/alertSlice";

initializeFirebase();
const queryClient = new QueryClient();

interface KitchenTimingData {
  kitchenSetup: boolean;
  openTime: string;
  closeTime: string;
  isOpen: boolean;
}

export default function App() {
  const dispatch = useDispatch();
  const [kitchenTimingData, setKitchenTimingData] = useState<KitchenTimingData | null>(null);
  const error = localStorage.getItem('error');
  const [isOpen, setIsOpen] = useState(false);
  const [once, setOnce] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const loadFingerprint = async () => {
      try {
        const fp = await FingerprintJS.load();
        const result = await fp.get();
        window.localStorage.setItem("deviceId", result.visitorId);
        console.log("FingerprintJS", result.visitorId);
      } catch (err: any) {
        console.log("FingerprintJS", err.message);
      }
    };

    const checkAuthToken = async () => {
      const authToken = await window.localStorage.getItem("authToken");
      if (authToken == null) {
        loadFingerprint();
      }
    };

    checkAuthToken();
  }, []);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (error && error !== "") {
      const e = JSON.parse(error);
      dispatch(showAlert({
        message: e?.message,
        type: AlertType.error,
      }));
    }
  }, [error]);
  


  useEffect(() => {
    const storedData = window.localStorage.getItem('kitchenTimingData');
    if (storedData) {
      const data = JSON.parse(storedData) as KitchenTimingData;
      if ('openTime' in data && 'closeTime' in data) {
        setKitchenTimingData(data);
        if (!once)
          setIsOpen(data.kitchenSetup);
      }
    }
  }, [currentTime]);

  const handleCloseAlert = () => {
    setIsOpen(false);
    setOnce(true);
  };

  return (
    <div>
        <PersistGate loading={null} persistor={persistor}>
          {isOpen && kitchenTimingData && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50" onClick={handleCloseAlert}>
              <div className="absolute inset-0 flex items-center justify-center">
                <KitchenAlert isOpen={isOpen} onClose={handleCloseAlert} openTime={kitchenTimingData.openTime} closeTime={kitchenTimingData.closeTime} />
              </div>
            </div>
          )}
          <QueryClientProvider client={queryClient}>
            <RecaptchaContainer />
            <RouterProvider router={router} />
          </QueryClientProvider>
          <Alert />
        </PersistGate>
    </div>
  );
}
function setError(message: any) {
  throw new Error("Function not implemented.");
}

