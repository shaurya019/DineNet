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
    <div className="flex-col">
      <div className="bg-gray-200 w-28 h-32">
        <img
          ref={ref}
          className="w-28 h-32"
          src={meal.thumbnail_url}
          onError={() => {
            if (ref.current) ref.current.src = "/assets/default_food.png";
          }}
        />
      </div>
      <div className="bg-white w-28 h-26 flex items-center justify-between rounded-md shadow-lg" style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)' }}>
        <h5 className="font-medium text-firefly text-xs ml-1.5 overflow-hidden overflow-ellipsis">{meal.product_name}</h5>
        <div className="flex items-center">
          <h5 className="font-medium text-firefly text-xs mr-1.5"><span>&#8377;</span>{meal.price}</h5>
          <button onClick={addThings} className="m-1 bg-laurel w-8 h-8 rounded-md flex items-center justify-center">
            <Plus className="stroke-white" />
          </button>
        </div>
      </div>

    </div>
  )
}
