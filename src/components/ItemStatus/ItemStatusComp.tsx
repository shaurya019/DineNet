import React from "react";

interface ItemStatusProps {
  item: any;
}

export const ItemStatusComp = ({ item }: ItemStatusProps) => {
  return (
    <div className="bg-white mx-5 mb-4 h-52 px-0 pt-3 items-center  rounded-md shadow-lg text-blue-dark">
      <div className="flex flex-col">
        <h4 className="mx-3 font-semibold text-green-mineral text-xs">
          Item Details
        </h4>
        <hr className="bg-silver  mx-3 my-3" />
        <div>
          {item.order_items ? (
            item.order_items.map((orderItem: any, orderIndex: any) => (
              <div className="flex flex-row justify-between ml-3 mr-10 mb-3">
                <h5 className="w-1/3 font-medium text-grey text-xs text-left">
                {orderItem.product.name}
                </h5>
                <h5 className="w-1/3 font-medium text-grey text-xs text-center">
                  {orderItem.quantity}
                </h5>
                <h5 className="w-1/3 font-semibold text-grey text-xs text-right">
                  <span>&#8377;</span>
                  {orderItem.price}
                </h5>
              </div>
            ))
          ) : (
            <p></p>
          )}
        </div>

        <h4 className="mx-3 mt-2 font-semibold text-green-mineral text-xs">
          Customization
        </h4>
        <hr className="bg-silver  mx-3 my-3" />
        <h4 className="mx-3 font-medium text-grey text-xs">
          {item.customization}
        </h4>
      </div>
    </div>
  );
};
