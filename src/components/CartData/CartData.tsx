import React from 'react'
import Veg from '../../assets/icons/Veg';
import {Minus} from '../../assets/icons/Minus';
import {Plus} from '../../assets/icons/Plus';
import AddToCartButton from "../AddToCartButton";


export const CartData = ({item}:any) => {
  const { name, quantity, serves, price } = item;

      
    return (
      <div className='py-4 flex flex-row justify-between'>
      <span className='py-0.5'>
     <Veg/>
     </span>
      <div className='flex-col'>
        <h4 className="font-medium text-xs text-grey">{name}</h4>
        {/* <h4 className="font-medium text-xs text-grey">{quantity !== 0 ? `${quantity} Pcs | Serves ${serves}` : `Serves ${serves}`}</h4> */}
      </div>
 <AddToCartButton item={item}/>

<h4 className="font-medium text-xs text-grey"><span>&#8377;</span>{price}</h4>
    </div>
    
    )
  }

