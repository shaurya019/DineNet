import React from 'react'
import {StripeComponent} from '../ContainerCart/StripeComponent'
import {CartData} from '../CartData/CartData'

export const OrderDetails = () => {
  const addThings = () => {
  };

  const addInstruction = () => {
  };

  return (
    <>
    <StripeComponent title="Order Details"/>
      <div className='flex flex-col px-3.5 py-3.5'>
     <CartData 
      name="Paneer Pakoda"
      quantity="4"
      serves="2"
      price="120"
     />
     <CartData
      name="Paneer Pakoda"
      quantity="0"
      serves="2"
      price="120"
     />
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
      <button onClick={addInstruction} className="text-custon-add-green font-bold text-xs">ADD</button>
      </div>
    </div>
      <hr className="bg-silver  w-full" />
    </>
  )
}


