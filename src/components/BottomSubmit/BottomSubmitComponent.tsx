import React from 'react';

interface BottomSubmitComponentProps {
  Heading: string;
  Pass?: string; 
  setPaySubmit?: React.Dispatch<React.SetStateAction<boolean>>; 
  setSubmit?: React.Dispatch<React.SetStateAction<boolean>>; 
}

export const BottomSubmitComponent: React.FC<BottomSubmitComponentProps> = ({ Heading, Pass, setPaySubmit, setSubmit }) => {

  const Proceed = () => {

    if (Pass === 'Submit Request' && setSubmit) { 
      setSubmit(true);
      console.log(setPaySubmit);
    }

    if (Pass === 'Payment' && setPaySubmit) { 
      setPaySubmit(true);
      console.log(setPaySubmit);
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
