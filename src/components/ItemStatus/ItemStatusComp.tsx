import React from "react";

interface ItemStatusProps {
  item: any;
}

export const ItemStatusComp = ({ item }: ItemStatusProps) => {
  const formatBreakupKeys = (breakup: any) => {
    const formattedBreakup: any = {};
    Object.keys(breakup).forEach((key) => {
      const formattedKey = key.replace(/_/g, ' ').toUpperCase();
      formattedBreakup[formattedKey] = breakup[key];
    });
    return formattedBreakup;
  };

  const formattedAmountBreakup = formatBreakupKeys(item.total_amount_breakup);

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
                    <td className="text-right text-xs py-2">
                      <span>&#8377;</span> {orderItem.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p></p>
          )}
        </div>

        <div className="w-full">
          <hr className="bg-silver mx-3 my-3" />
        </div>
        <div className="overflow-x-auto ml-6 mr-10">
          <table className="w-full mb-6">
            <tbody>
              {Object.keys(formattedAmountBreakup).map((key, i) => {
                if (key !== "AMOUNT" && key !== "TOTAL AMOUNT") {
                  return (
                    <tr key={i} className="flex flex-row justify-between mb-3">
                      <td className="font-normal text-[10px]">{key} :</td>
                      <td className="font-semibold text-grey text-[12px]">
                        <span>&#8377;</span>{formattedAmountBreakup[key]}
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
        <hr className="bg-silver mx-3 my-3" />
        <div className="w-full h-[42px] px-5 font-bold text-blue-oxford flex flex-row items-center justify-between">
          <h4 className="text-[10px]">Total Price</h4>
          <h4 className="text-[15px]">
            <span>&#8377;</span>{formattedAmountBreakup["TOTAL AMOUNT"]}
          </h4>
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
