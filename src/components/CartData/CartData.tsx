import React from 'react'
import Veg from '../../assets/icons/Veg';
import AddToCartButton from "../AddToCartButton";


export const CartData = ({ item }: any) => {
  const { name,serves, price } = item;


  return (
    <div className='py-4 flex  items-center justify-between'>
      <span className='py-0.5'>
        <Veg />
      </span>
      <div className='flex-col w-[99px] overflow-hidden'>
    <h4 className="font-medium text-xs text-grey text-ellipsis">
      {name}
    </h4>
  </div>
      <AddToCartButton item={item} />
      <div className="price-container w-[45px] text-right">
    <h4 className="font-medium text-xs text-grey">
      <span>&#8377;</span>{price}
    </h4>
  </div>
    </div>
  )
}


 {/* <h4 className="font-medium text-xs text-grey">{quantity !== 0 ? `${quantity} Pcs | Serves ${serves}` : `Serves ${serves}`}</h4> */}
