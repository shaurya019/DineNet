import React from 'react';
import { StripeComponent } from '../ContainerCart/StripeComponent';

interface TaxChargesProps {
  totalPrice: number;
  totalTax: number;
  taxList: { key: string; value: any; }[];
}

export const TaxCharges: React.FC<TaxChargesProps> = ({ totalPrice, totalTax, taxList }) => {
  return (
    <>
      <StripeComponent title="Bill Details" />
      <div className="bg-white text-blue-dark px-3.5 py-4 mb-20">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <div className="flex items-center">
              <span className="font-semibold text-xs">Item Total :</span>
            </div>
            <h5 className="font-semibold text-sm text-grey"><span>&#8377;</span>{totalPrice}</h5>
          </div>
          <hr className="bg-silver mx-4 my-3" />
          <div className="flex flex-col">
            {taxList.map((tax, index) => (
              <div key={index} className="flex flex-row py-2.5 justify-between">
                <div className="flex items-center">
                  <span className="font-normal text-xs">{tax.key} :</span>
                </div>
                <h5 className="font-semibold text-xs text-gray-800 text-opacity-80"><span>&#8377;</span>{tax.value}</h5>
              </div>
            ))}
          </div>
          <hr className="bg-silver mx-4 my-3" />
          <div className="flex flex-row justify-between">
            <div className="flex items-center">
              <span className="font-semibold text-xs">To Pay :</span>
            </div>
            <h5 className="font-semibold text-sm text-grey"><span>&#8377;</span>{totalTax}</h5>
          </div>
        </div>
      </div>
    </>
  )
}
