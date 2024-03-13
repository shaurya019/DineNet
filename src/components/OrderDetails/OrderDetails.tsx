import React from 'react'
import {StripeComponent} from '../ContainerCart/StripeComponent'
import {CartData} from '../CartData/CartData'
import { useSelector } from "react-redux";
import { RootState } from "@/service/store/cartStore";

export const OrderDetails = () => {
  const {
    cart: { items },
  } = useSelector((state: RootState) => state); 
  // console.log(items);
  const addThings = () => {
  };

  const addInstruction = () => {
  };

  return (
    <>
    <StripeComponent title="Order Details"/>
      <div className='flex flex-col px-3.5 py-3.5'>
      {Object.keys(items).map(itemId => (
         <CartData 
         key={itemId}
         item={items[itemId]}
       />
        ))}
     </div>
      <hr className="bg-silver  w-full" />
      <div className="bg-white text-greenCyan px-3.5 py-3 flex flex-row justify-between items-center">
        <div className="flex items-center">
        <span className="font-normal text-xs">Add more items to your list</span>
      </div>
      <div>
      <button onClick={addThings} className="text-green-willam font-bold text-xs">ADD</button>
      </div>
    </div>
      <hr className="bg-silver  w-full" />
      <div className="bg-white text-greenCyan px-3.5 py-3 flex flex-row justify-between items-center">
        <div className="flex items-center">
        <span className="font-normal text-xs">Add Instructions</span>
      </div>
      <div>
      <button onClick={addInstruction} className="text-green-willam font-bold text-xs">ADD</button>
      </div>
    </div>
      <hr className="bg-silver  w-full" />
    </>
  )
}


