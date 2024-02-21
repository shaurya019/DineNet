import React from 'react'
import Veg from '../../assets/icons/Veg';
import {Minus} from '../../assets/icons/Minus';
import {Plus} from '../../assets/icons/Plus';

interface CartDataProps {
  name: string;
  quantity: string;
  serves: string;
  price: string;
}

export const CartData: React.FC<CartDataProps> = ({ name, quantity, serves, price }) => {

    const handleDecrement = () => {
        // Handle decrement logic here
      };
    
      const handleIncrement = () => {
        // Handle increment logic here
      };

      
    return (
      <div className='py-4 flex flex-row justify-between'>
      <span className='py-0.5'>
     <Veg/>
     </span>
      <div className='flex-col'>
        <h4 className="font-medium text-xs text-grey">{name}</h4>
        <h4 className="font-medium text-xs text-grey">{quantity !== '0' ? `${quantity} Pcs | Serves ${serves}` : `Serves ${serves}`}</h4>
      </div>
      <div className="bg-white border-2 border-green-willam px-2 py-1 rounded flex justify-between gap-5">
  <button onClick={handleDecrement}>
  <Minus className="stroke-green" />
  </button>
  <h4 className='text-green-willam'>1</h4>
  <button onClick={handleIncrement}>
    <Plus className="stroke-green" />
  </button>
</div>

<h4 className="font-medium text-xs text-grey"><span>&#8377;</span>{price}</h4>
    </div>
    
    )
  }

