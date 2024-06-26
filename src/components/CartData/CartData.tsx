import React, { useEffect } from 'react';
import Veg from '../../assets/icons/Veg';
import AddToCartButton from '../AddToCartButton';

interface OrderDetailsProps {
  item: any;
  isAvailable: any;
  setRefresh?: React.Dispatch<React.SetStateAction<boolean>>;
  setOutOfStock: React.Dispatch<React.SetStateAction<boolean>>;
  carts: any;
}

export const CartData = ({
  item,
  setRefresh,
  setOutOfStock,
  isAvailable,
}: OrderDetailsProps) => {
  const { product_name, serves, price, non_veg } = item;
  if (typeof item.availability !== 'undefined' && !item.availability) {
    setOutOfStock(true);
  }

  return (
    <div className="py-4 flex  items-center justify-between">
      <div className="flex-row">
        <div className="flex justify-between items-center">
          <span className="py-0.5 mr-6">
            {non_veg ? <Veg color="#E8505B" /> : <Veg color="#4CAF50" />}
          </span>
          <div className="flex-col w-[99px] overflow-hidden">
            <h4 className="font-medium text-xs text-grey text-ellipsis">
              {product_name}
            </h4>
          </div>
        </div>
        {isAvailable || (
          <h4 className="mt-2 font-medium text-xs text-red-dark text-ellipsis">
            Out of Stock
          </h4>
        )}
      </div>
      <AddToCartButton item={item} setRefresh={setRefresh} />
      <div className="price-container w-[45px] text-right">
        <h4 className="font-medium text-xs text-grey">
          <span>&#8377;</span>
          {price}
        </h4>
      </div>
    </div>
  );
};
