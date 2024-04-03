import { Minus } from "@/assets/icons/Minus";
import { Plus } from "@/assets/icons/Plus";
import { addToCart, removeFromCart } from "@/service/Slice/cartSlice";
import { RootState } from "@/service/store/cartStore";
import { useSelector, useDispatch } from "react-redux";

interface IAddToCartButton {
  item: any;
  setRefresh?: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AddToCartButton = ({ item,setRefresh }: IAddToCartButton) => {
  const { totalCartItems } = useSelector((state: RootState) => state.cart);
  const itemCount = useSelector(
    (state: RootState) => state.cart.items[item.id]?.qty
  );
  const dispatch = useDispatch();
  const handleAddItem = () =>
    dispatch(
      addToCart({
        id: item.id,
        name: item.product_name,
        price: item.price,
        qty: 0,
        tags:item.tags
      })
    );
  const handleRemoveItem = () => {
    if(totalCartItems>1 && item.qty===1 && setRefresh!=null){
      setRefresh(true);
    }
    dispatch(
      removeFromCart({
        id: item.id,
      })
    );
    if(setRefresh!=null){
      setTimeout(() => {
        setRefresh(false);
      }, 300);
    }
  };
  return itemCount ? (
    <div className="bg-white border-2 border-green text-green px-1 py-1 rounded flex justify-between gap-5">
      <button>
        <Minus className="stroke-green" onClick={handleRemoveItem} />
      </button>
      <h4>{itemCount}</h4>
      <button>
        <Plus className="stroke-green" onClick={handleAddItem} />
      </button>
    </div>
  ) : (
    <button className="bg-white border-2 border-green text-green px-6 py-1 rounded" onClick={handleAddItem}>
      ADD
    </button>
  );
};
