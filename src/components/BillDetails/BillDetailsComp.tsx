import React from 'react'

interface BillDetailsProps {
  totalPrice: number;
  totalTax: number;
  taxList: { key: string; value: any; }[];
}

export const BillDetailsComp: React.FC<BillDetailsProps> = ({ totalPrice, totalTax, taxList }) => {
  return (
    <div className="bg-white mx-5 mb-4 h-60 px-0 pt-3 items-center  rounded-md shadow-lg text-blue-dark">
    <div className="flex flex-col">
    <h4 className="mx-3 font-semibold text-green-mineral text-xs">Bill Details</h4>
    <hr className="bg-silver  mx-3 my-3" />
    <div className="flex flex-row justify-between">
    <h5 className="ml-3.5 font-semibold text-xs">Item Total :</h5>
    <h5 className="mx-10 font-semibold text-sm"><span>&#8377;</span>{totalPrice}</h5>
    </div>
    <hr className="bg-silver  mx-3 my-3" />
    <div className="flex flex-col">
          {taxList.map((tax, index) => (
            <div key={index} className="flex flex-row py-2.5 justify-between">
              <div className="mx-3.5 flex items-center">
                <span className="font-normal text-xs">{tax.key} :</span>
              </div>
              <h5 className="mx-10 font-semibold text-xs text-gray-800 text-opacity-80"><span>&#8377;</span>{tax.value}</h5>
            </div>
          ))}
        </div>
    <hr className="bg-silver  mx-3 my-3" />
    <div className="flex flex-row justify-between">
    <h5 className="mx-3.5 font-semibold text-xs">To Pay :</h5>
    <h5 className="font-semibold text-sm text-grey mx-10"><span>&#8377;</span>{totalTax}</h5>
    </div>
  </div>
    </div>
  )
}

