import React, { useRef } from "react";
import { Plus } from '../../assets/icons/Plus';
import { addToCart } from "@/service/Slice/cartSlice";
import { useDispatch } from "react-redux";
import { AlertType, showAlert } from "@/service/Slice/alertSlice";
import { defaultClientId, defaultSource } from '@/utils/constants';

interface MealAddOnsProps {
  meal: any,
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MealAddOnsComponent: React.FC<MealAddOnsProps> = ({ meal, refresh, setRefresh }) => {

  const clientId = window.localStorage.getItem("clientId") || defaultClientId;
  const source = window.localStorage.getItem("source") || defaultSource;
  const dispatch = useDispatch();
  const addThings = () => {
    setRefresh(true);
    dispatch(
      addToCart({
        clientId,
        source,
        item: {
          id: meal.id,
          name: meal.product_name,
          price: meal.price,
          qty: 0,
          tags: meal.tags,
          nonVeg: meal.non_veg,
          campaignName: true,
          availability: meal.availability
        },
      })
    );
    dispatch(showAlert({
      message: meal.product_name + " added to your cart",
      type: AlertType.success,
    }));
    setTimeout(() => {
      setRefresh(false);
    }, 300);
  };
  const ref = useRef<HTMLImageElement>(null);

  return (
    <div className="flex-col w-28 h-38 rounded-md shadow-lg items-center" style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)' }}>
      <div className="bg-gray-200 h-[110px] rounded-md m-[5px]">

        <img
          ref={ref}
          className="w-28 h-[110px] object-cover"
          src={meal.thumbnail_url}
          onError={() => {
            if (ref.current) ref.current.src = "/assets/default_food.png";
          }}
        />
      </div>
      <div className="bg-white flex-col items-center mx-1.5" >
        <h5 className="font-medium text-firefly text-left text-xs overflow-hidden overflow-ellipsis my-[2px]">{meal.product_name}</h5>
        <h5 className="font-medium text-firefly text-left text-xs my-[2px]"><span>&#8377;</span>{meal.price}</h5>
        <button onClick={addThings} className="my-1 bg-laurel w-full w-28 h-8 rounded-md items-center justify-center">
          <h5 className="font-medium text-white text-xs">Add</h5>
        </button>
      </div>

    </div>
  )
}
