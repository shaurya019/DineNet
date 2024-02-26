import React from 'react'
import Nav from '../Navbar';
import Bottom from '../BottomSubmit';

interface ConfirmationComponentProps {
    title: string;
    message1: string;
    message2: string;
    message3: string;
    message4: string;
    buttonName: string;
    svg: React.ReactNode; 
  }
  
  export const ConfirmationComponent: React.FC<ConfirmationComponentProps> = ({title,message1,message2,message3,message4,buttonName,svg}) => {
    return (
      <div>
          <Nav title="Cart"  show="False" showEmpty="False"/> 
          <div className='flex flex-col mb-20 mx-10 justify-center items-center'>
          <h3 className="font-semibold text-green-willam text-center text-2xl mb-2">{title}</h3>
              <h4 className="font-normal text-center text-green-willam text-sm mb-1">{message1}</h4>
              {svg}
              <h4 className="font-normal text-center text-green-willam text-sm mt-1 mb-4">{message2}<span className="font-semibold"> {message3}</span></h4>
              <h4 className="font-normal text-center text-center text-green-willam text-xs  mb-7">{message4}</h4>
              <div className='mb-4 h-7 w-56 border border-green-willam rounded rounded-md border-2'>
                  <h5 className=' text-green-willam text-center font-medium'>{buttonName}</h5>
              </div>
          </div>
         <Bottom Heading="Back to Home"/> 
      </div>
    )
  }

