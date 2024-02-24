import React from 'react'

export interface RequestStatusCompProps {
    message: string;
    title: string;
  }
  
 export const RequestStatusComp: React.FC<RequestStatusCompProps> = ({message,title}) => {
    return (
      <div className="bg-white mx-5 mb-4 h-52 px-0 pt-3 items-center  rounded-md shadow-lg text-blue-dark">
      <div className="flex flex-col mx-3">
      <div className='flex flex-row justify-between'>
      <h4 className="font-semibold text-green-mineral text-xs">Request Details</h4>
      <h4 className="font-semibold text-red-warm text-xs">Cancel Request</h4>
      </div>
      <hr className="bg-silver my-3" />
      <div className="border border-whiteSmoking border-solid w-full h-16 text-grey text-xs rounded pl-2">
          {message}
      </div>
      <h4 className="mt-2 font-semibold text-green-mineral text-xs">Category</h4>
      <hr className="bg-silver my-3" />
      <h4 className="font-medium text-grey text-xs">{title}</h4>
    </div>
      </div>
    )
}

