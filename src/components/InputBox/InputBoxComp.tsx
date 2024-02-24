import React from 'react'

export const InputBoxComp = () => {
  return (
    <div className="flex flex-col items-center mx-3.5 mb-4">
    <div className="relative z-0 w-full group">
     <label htmlFor="first_name" className="font-mono font-medium  text-[11px]  text-green-willam bg-white relative px-1  top-3 left-3 w-auto">
     Full Name 
     </label>
     <input type="text" id="first_name" className="h-9 text-[11px] text-green-willam bg-white border border-green-willam  focus:border-green-willam rounded-lg w-full p-2.5 " placeholder="Full Name" />
     </div>
     <div className="relative z-0 w-full group">
     <label htmlFor="first_phone" className="font-mono font-medium  text-[11px]  text--green-willam bg-white relative px-1  top-3 left-3 w-auto">
     Phone Number 
     </label>
     <input type="text" id="first_phone" className="h-9 text-[11px] text-green-willam bg-white border border-green-willam focus:border-green-willam rounded-lg w-full p-2.5"
     placeholder="Phone Number" />
     </div>
     </div>
  )
}

