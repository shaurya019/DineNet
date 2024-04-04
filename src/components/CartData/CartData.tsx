import React from 'react'
import Veg from '../../assets/icons/Veg';
import AddToCartButton from "../AddToCartButton";

interface OrderDetailsProps {
  item: any;
  setRefresh?: React.Dispatch<React.SetStateAction<boolean>>;
}


export const CartData = ({ item,setRefresh }: OrderDetailsProps) => {
  const { name,serves, price,nonVeg } = item;
  console.log(item);

  return (
    <div className='py-4 flex  items-center justify-between'>
    <div className='flex justify-between items-center'>
    <span className='py-0.5 mr-6'>
      { nonVeg ? <Veg color="#E8505B"/>  : <Veg color="#4CAF50"/> }
      </span>
      <div className='flex-col w-[99px] overflow-hidden'>
    <h4 className="font-medium text-xs text-grey text-ellipsis">
      {name}
    </h4>
  </div>
    </div>
      <AddToCartButton item={item} setRefresh={setRefresh}/>
      <div className="price-container w-[45px] text-right">
    <h4 className="font-medium text-xs text-grey">
      <span>&#8377;</span>{price}
    </h4>
  </div>
    </div>
  )
}


 {/* <h4 className="font-medium text-xs text-grey">{quantity !== 0 ? `${quantity} Pcs | Serves ${serves}` : `Serves ${serves}`}</h4> */}
