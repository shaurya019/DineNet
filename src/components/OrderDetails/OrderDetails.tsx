import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { StripeComponent } from '../ContainerCart/StripeComponent';
import { CartData } from '../CartData/CartData';
import { useSelector } from "react-redux";
import { RootState } from "@/service/store/cartStore";
import EditItems from "@assets/icons/Edit"
import { defaultClientId, defaultSource } from '@/utils/constants';

interface OrderDetailsProps {
  meals: any[];
  setRefresh?: React.Dispatch<React.SetStateAction<boolean>>;
  setOutOfStock: React.Dispatch<React.SetStateAction<boolean>>;
  add: boolean;
  setAdd: React.Dispatch<React.SetStateAction<boolean>>;
  save: boolean;
  setSave: React.Dispatch<React.SetStateAction<boolean>>;
  instruction: string;
  setInstruction: React.Dispatch<React.SetStateAction<string>>;
  filteredData: any[];
}

export const OrderDetails = ({ meals, setRefresh, setOutOfStock, add, setAdd, save, setSave, instruction, setInstruction, filteredData}: OrderDetailsProps) => {
  const clientId = window.localStorage.getItem("clientId") || defaultClientId;
  const source = window.localStorage.getItem("source") || defaultSource;
  const { carts } = useSelector((state: RootState) => state.cart);
  const clientCart = carts[clientId]?.[source];
  const items = clientCart ? clientCart.items : {};


  const handleChange = (e: any) => {
    setInstruction(e.target.value);
  };


  const navigate = useNavigate();

  const addThings = () => {
    navigate(`/?clientId=${clientId}`);
  };

  const saveThings = () => {
    setSave(true);
  };


  const editThings = () => {
    setSave(false);
  }

  const addInstruction = () => {
    setAdd(true);
  };

  const checkAvailability = (productId: any) => {
    const product = filteredData.filter((item :any) => item.id == productId);
    return product[0] ? product[0].availability : false;
  };

  useEffect(() => {
    const availabilty = filteredData.filter((item :any) => Object.keys(items).includes(`${item.id}`)).map(item => item?.availability);
    !availabilty.includes(false) && setOutOfStock(false);
  },[carts]);
  return (
    <>
      <StripeComponent title="Order Details" />
      <div className='flex flex-col px-3.5 py-3.5'>
        {Object.keys(items).map(itemId => {
          const isAvailable = checkAvailability(itemId);
          return (
            <CartData
              key={itemId}
              item={filteredData.filter((item :any) => item.id == itemId)?.[0] || {}}
              isAvailable={isAvailable}  // Passing availability status
              setRefresh={setRefresh}
              setOutOfStock={setOutOfStock}
              carts={carts}
            />
          );
        })}
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
      <hr className="bg-silver w-full" />
      {add ? (
        <div className='mx-3 items-center'>
          <div className='mb-11 mt-2 text-xs text-green-willam w-full flex justify-between items-center'>
            <input
              type="text"
              placeholder="Add instructions..."
              value={instruction}
              onChange={handleChange}
              style={{ width: '100%' }}
              readOnly={save}
              className="focus:outline-none"
            />
            {instruction.length > 0 ?
              <div>
                {
                  save ?
                    <button onClick={editThings} className="text-green-willam font-bold text-xs"><EditItems /></button>
                    :
                    <button onClick={saveThings} className="text-green-willam font-bold text-xs">SAVE</button>
                }
              </div>
              :
              ''}
          </div>
          <h6 className='text-[8px] font-light text-green-willam'>* Fulfillment of this request may vary based on the hotel's specifications and refunds <br /> related to this matter cannot be guaranteed.</h6>
        </div>
      ) : (
        <div className="bg-white text-greenCyan px-3.5 py-3 flex flex-row justify-between items-center">
          <div className="flex items-center">
            <span className="font-normal text-xs">Add Instructions</span>
          </div>
          <div>
            <button onClick={addInstruction} className="text-green-willam font-bold text-xs">ADD</button>
          </div>
        </div>
      )}
      <hr className="bg-silver w-full" />
    </>
  );
};





