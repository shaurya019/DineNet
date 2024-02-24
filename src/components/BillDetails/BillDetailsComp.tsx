import React from 'react'

export const BillDetailsComp = () => {
  return (
      <div className="bg-white mx-5 mb-4 h-60 px-0 pt-3 items-center  rounded-md shadow-lg text-blue-dark">
      <div className="flex flex-col">
      <h4 className="mx-3 font-semibold text-green-mineral text-xs">Bill Details</h4>
      <hr className="bg-silver  mx-3 my-3" />
      <div className="flex flex-row justify-between">
      <h5 className="ml-3.5 font-semibold text-xs">Item Total :</h5>
      <h5 className="mx-10 font-semibold text-sm"><span>&#8377;</span>150.00</h5>
      </div>
      <hr className="bg-silver  mx-3 my-3" />
      <div className="flex flex-col">
      <div className="flex flex-row justify-between">
      <h5 className="mx-3.5 font-normal text-xs">Service Charge :</h5>
      <h5 className="mx-10 font-normal font-semibold text-grey text-xs"><span>&#8377;</span>30.00</h5>
      </div>
      <div className="flex flex-row py-2.5 justify-between">
      <h5 className="mx-3.5 font-normal text-xs">CGST :</h5>
      <h5 className="mx-10 font-semibold text-grey text-xs"><span>&#8377;</span>30.00</h5>
      </div>
      <div className="flex flex-row justify-between">
      <h5 className="mx-3.5 font-normal text-xs">SGST :</h5>
      <h5 className="mx-10  font-semibold text-grey text-xs"><span>&#8377;</span>30.00</h5>
      </div>
      </div>
      <hr className="bg-silver  mx-3 my-3" />
      <div className="flex flex-row justify-between">
      <h5 className="mx-3.5 font-semibold text-xs">To Pay :</h5>
      <h5 className="mx-10 font-semibold text-sm"><span>&#8377;</span>240.00</h5>
      </div>
    </div>
      </div>
  )
}

