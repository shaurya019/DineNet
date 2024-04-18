import React from 'react';
interface CustomAlertProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
  clearCart: () => void; 
}

export const CustomAlert: React.FC<CustomAlertProps> = ({ isOpen, message, onClose, clearCart }) => {

  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white px-3.5 mx-10 rounded-lg max-w-md">
        <div className="my-3.5">
          <p className="text-lg text-grey-granite">Empty Cart</p>
        </div>
        <hr className='my-[14px]'/>
        <div>
          <p className="text-[11px] text-grey-granite">{message}</p>
        </div>
        <div className="flex flex-row items-center justify-between mt-6 mb-9">
          <button onClick={onClose}>
            <div className="w-24 md:w-32 h-8 mr-5 rounded-md bg-grey-approxLight flex justify-center items-center">
              <span className="font-semibold text-[11px] text-grey-granite">Cancel</span>
            </div>
          </button>
          <button onClick={() => {
            clearCart();
            onClose();
          }}>
            <div className="w-24 md:w-32 h-8 rounded-md bg-greenCyan flex justify-center items-center">
              <span className="font-semibold text-[11px] text-white">Empty Cart</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
