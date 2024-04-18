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
import { persistor, store } from "./service/store/cartStore";
import Alert from "./components/Alert";
import KitchenAlert from "@/components/KitchenAlert";

initializeFirebase();
const queryClient = new QueryClient();

interface KitchenTimingData {
  kitchenSetup: boolean;
  openTime: string;
  closeTime: string;
  isOpen: boolean; 
}

export default function App() {
  const [kitchenTimingData, setKitchenTimingData] = useState<KitchenTimingData | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedData = window.localStorage.getItem('kitchenTimingData');
    if (storedData) {
      const data = JSON.parse(storedData) as KitchenTimingData; 
      if ('openTime' in data && 'closeTime' in data) {
        setKitchenTimingData(data);
        setIsOpen(data.kitchenSetup);
      }
    }
  }, []);

  const handleCloseAlert = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Provider store={store}>
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
      </Provider>
    </div>
  );
}
