import React from 'react'
import {StripeComponent} from '../ContainerCart/StripeComponent'

export const Bill = () => {
  return (
   <>
    <StripeComponent title="Bill Details"/>
      <div className="bg-white text-blue-dark px-3.5 py-4 mb-20">
      <div className="flex flex-col">
      <div className="flex flex-row justify-between">
      <div className="flex items-center">
        <span className="font-semibold text-xs">Item Total :</span>
      </div>
      <h5 className="font-semibold text-sm text-grey"><span>&#8377;</span>150.00</h5>
      </div>
      <hr className="bg-silver  mx-4 my-3" />
      <div className="flex flex-col">
      <div className="flex flex-row justify-between">
      <div className="flex items-center">
        <span className="font-normal text-xs">Service Charge :</span>
      </div>
      <h5 className="font-semibold text-xs text-gray-800 text-opacity-80"><span>&#8377;</span>30.00</h5>
      </div>
      <div className="flex flex-row py-2.5 justify-between">
      <div className="flex items-center">
        <span className="font-normal text-xs">CGST :</span>
      </div>
      <h5 className="font-semibold text-xs text-gray-800 text-opacity-80"><span>&#8377;</span>30.00</h5>
      </div>
      <div className="flex flex-row justify-between">
      <div className="flex items-center">
        <span className="font-normal text-xs">SGST :</span>
      </div>
      <h5 className="font-semibold text-xs text-gray-800 text-opacity-80"><span>&#8377;</span>30.00</h5>
      </div>
      </div>
      <hr className="bg-silver  mx-4 my-3" />
      <div className="flex flex-row justify-between">
      <div className="flex items-center">
        <span className="font-semibold text-xs">To Pay :</span>
      </div>
      <h5 className="font-semibold text-sm text-grey"><span>&#8377;</span>240.00</h5>
      </div>
    </div>
      </div>
   </>
  )
}

