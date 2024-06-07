import { Minus } from "@/assets/icons/Minus";
import { Plus } from "@/assets/icons/Plus";
import { addToCart, removeFromCart, removeItem } from "@/service/Slice/cartSlice";
import { RootState } from "@/service/store/cartStore";
import { useSelector, useDispatch } from "react-redux";
import { AlertType, showAlert } from "@/service/Slice/alertSlice";
import { defaultClientId, defaultSource } from '@/utils/constants';

interface IAddToCartButton {
  item: any;
  setRefresh?: React.Dispatch<React.SetStateAction<boolean>>;
  kitchenSetup?: any;
}
export const AddToCartButton = ({ item, setRefresh, kitchenSetup }: IAddToCartButton) => {

  const clientId = window.localStorage.getItem("clientId") || defaultClientId;
  const source = window.localStorage.getItem("source") || defaultSource;

  const totalCartItems = useSelector((state: RootState) => state.cart.carts[clientId]?.[source]?.totalCartItems);
  const itemCount = useSelector((state: RootState) => state.cart.carts[clientId]?.[source]?.items[item.id]?.qty);
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(
      addToCart({
        clientId,
        source,
        item: {
          id: item.id,
          name: item.product_name,
          price: item.price,
          qty: 1,
          tags: item.tags,
          nonVeg: item.non_veg,
          campaignName: false,
          availability: item.availability
        },
      })
    );
    console.log("Name",item.id," ",item.product_name," ",item.price," ",item.tags);
  }

  const handleRemoveItem = () => {
    if (totalCartItems > 1 && item.qty === 1 && setRefresh != null) {
      setRefresh(true);
    }
    dispatch(
      removeFromCart({
        clientId,
        source,
        itemId: item.id,
      })
    );
    if (setRefresh != null) {
      setTimeout(() => {
        setRefresh(false);
      }, 300);
    }
  };


  const handleUnAvailableItem = () => {
    dispatch(
      removeItem({
        clientId,
        source,
        itemId: item.id,
      })
    );
    if (setRefresh != null) {
      setTimeout(() => {
        setRefresh(false);
      }, 300);
    }
  };

  return itemCount ? (
    <div className="bg-white border-2 border-green text-green px-2 py-1 rounded flex justify-between gap-5">
      {item.availability ? (
        <>
          <div className="minus-container flex justify-center items-center cursor-pointer" onClick={handleRemoveItem}>
            <Minus className="stroke-green" />
          </div>
          <h4>{itemCount}</h4>
          <div className="minus-container flex justify-center items-center cursor-pointer" onClick={handleAddItem}>
            <Plus className="stroke-green" />
          </div>
        </>
      ) : <div className="minus-container flex justify-center items-center cursor-pointer" onClick={handleUnAvailableItem}>
        Remove
      </div>}
    </div>
  ) : (
    <button
      className={`bg-white border-2 ${kitchenSetup ? 'border-green-dull text-green-dull' : 'border-green text-green'} px-6 py-1 rounded`}
      onClick={handleAddItem}
      disabled={kitchenSetup}
    >
      ADD
    </button>
  );
}  