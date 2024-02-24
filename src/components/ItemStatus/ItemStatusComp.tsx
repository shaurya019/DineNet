import React from 'react'

export const ItemStatusComp = () => {
  return (
    <div className="bg-white mx-5 mb-4 h-52 px-0 pt-3 items-center  rounded-md shadow-lg text-blue-dark">
    <div className="flex flex-col">
    <h4 className="mx-3 font-semibold text-green-mineral text-xs">Item Details</h4>
    <hr className="bg-silver  mx-3 my-3" />
    <div>
  <div className="flex flex-row justify-between ml-3 mr-10 mb-4">
    <h5 className="w-1/3 font-medium text-grey text-xs text-left">Paneer Pakoda</h5>
    <h5 className="w-1/3 font-medium text-grey text-xs text-center">1</h5>
    <h5 className="w-1/3 font-semibold text-grey text-xs text-right"><span>&#8377;</span>120.00</h5>
  </div>
  
  <div className="flex flex-row justify-between ml-3 mr-10 mb-4">
    <h5 className="w-1/3 font-medium text-grey text-xs text-left">Papdi Chat</h5>
    <h5 className="w-1/3 font-medium text-grey text-xs text-center">1</h5>
    <h5 className="w-1/3 font-semibold text-grey text-xs text-right"><span>&#8377;</span>120.00</h5>
  </div>
</div>

    <h4 className="mx-3 mt-2 font-semibold text-green-mineral text-xs">Customization</h4>
    <hr className="bg-silver  mx-3 my-3" />
    <h4 className="mx-3 font-medium text-grey text-xs">Make it Spicy</h4>
  </div>
    </div>
  )
}