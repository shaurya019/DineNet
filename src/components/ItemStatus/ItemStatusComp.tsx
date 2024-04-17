import React from "react";

interface ItemStatusProps {
  item: any;
}

export const ItemStatusComp = ({ item }: ItemStatusProps) => {
  return (
    <div className="bg-white mx-5 mb-4 p-3 rounded-md shadow-lg text-blue-dark">
      <div className="flex flex-col">
        <h4 className="font-semibold text-green-mineral text-xs mb-2">
          Item Details
        </h4>
        <hr className="bg-silver my-2" />
        <div className="overflow-x-auto ml-6 mr-10">
          {item.order_items ? (
            <table className="w-full mb-6">
              <tbody>
                {item.order_items.map((orderItem: any, orderIndex: any) => (
                  <tr key={orderIndex}>
                    <td className="text-xs py-2">{orderItem.product.name}</td>
                    <td className="text-center text-xs py-2">{orderItem.quantity}</td>
                    <td className="text-right text-xs  py-2"><span>&#8377;</span> {orderItem.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p></p>
          )}
        </div>

        {item.customization !== "" && (
     <div>
    <h4 className="font-semibold text-green-mineral text-xs mt-4">
      Customization
    </h4>
    <hr className="bg-silver my-2" />
    <p className="text-xs">{item.customization}</p>
  </div>
)}
      </div>
    </div>
  );
};
