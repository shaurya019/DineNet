import React from 'react'
import { Kitchen } from "@/assets/icons/Kitchen";

interface KitchenAlertProps {
  isOpen: boolean;
  onClose: () => void;
  openTime?: any;
  closeTime?: any;
}

export const KitchenAlert: React.FC<KitchenAlertProps> = ({ isOpen , onClose,openTime,closeTime}) => {


  if(!isOpen) return null;
  
  return (
    <div className='h-[547px] w-[334px] flex flex-col justify-between items-center text-center text-green-willam border-grey-light border bg-white rounded px-3 py-10'>
      <Kitchen />
      <h2 className='text-xl font-semibold text-red-warm'>Sorry but the kitchen staff is <br />asleep!!</h2>
      <h3 className='text-sm font-normal '>Our kitchen timings <span className='font-semibold'>{openTime} - {closeTime}</span></h3>
      <h3 className='text-sm font-semibold '>But you can always  explore our kitchen menu and create request and we are happy to assist you!</h3>
      <button onClick={() => onClose()} className='w-[266px] h-10 border-2 rounded-3xl border-greenCyan text-white bg-greenCyan items-center'>Home</button>
    </div>
  )
}


