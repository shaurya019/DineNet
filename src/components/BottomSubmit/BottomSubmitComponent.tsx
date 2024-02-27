import React, { useEffect } from 'react';

interface BottomSubmitComponentProps {
  Heading: string;
  setSubmit?: React.Dispatch<React.SetStateAction<boolean>>;
  imageFile?: File | null;
  textRequest?: string;
}

export const BottomSubmitComponent: React.FC<BottomSubmitComponentProps> = ({ Heading, setSubmit, imageFile, textRequest }) => {

  const storeImage = async () => {
    try {

      const formData = new FormData();
      formData.append('customer_id', '4');
      // formData.append('complimentary_order_id', '3');
      formData.append('text', textRequest ?? '');
      if (imageFile) {
        formData.append('image', imageFile);
      }

      const response = await fetch('http://alpine-staging-lb-1249159613.ap-south-1.elb.amazonaws.com/api/v1/complimentary_order', {
        method: 'POST',
        body: formData
      });
      console.log("response", response);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  const Proceed = () => {
    if (setSubmit) {
      setSubmit(true);
      console.log(setSubmit);
    } else {
      console.error("setSubmit function is not provided!");
    }
    console.log("imageFile", imageFile);
    if (imageFile != null) {
      storeImage();
    }
  };


  return (
    <div className='fixed bottom-0 w-full bg-white border-t-whiteSmoke mt-10 py-3 px-2.5' style={{ boxShadow: '0 -4px 4px 0px rgba(0, 0, 0, 0.07)' }}>
      <div className="bg-greenCyan text-center py-3 rounded-2xl">
        <button onClick={Proceed} className="uppercase text-white font-black text-xs">{Heading}</button>
      </div>
    </div>
  )
}
