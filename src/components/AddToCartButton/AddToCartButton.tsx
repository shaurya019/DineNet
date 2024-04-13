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
  const clientId = localStorage.getItem("clientId") || "1";
  const sourceId = localStorage.getItem("sourceId") || "1";
  const totalCartItems = useSelector((state: RootState) => state.cart.carts[clientId]?.[sourceId]?.totalCartItems);
  const itemCount = useSelector((state: RootState) => state.cart.carts[clientId]?.[sourceId]?.items[item.id]?.qty);
  const dispatch = useDispatch();
  const handleAddItem = () =>
    dispatch(
      addToCart({
        clientId,
        sourceId,
        item: {
          id: item.id,
          name: item.product_name,
          price: item.price,
          qty: 1, // Add new item with quantity 1
          tags: item.tags,
          nonVeg: item.non_veg,
        },
      })
    );
  const handleRemoveItem = () => {
    if(totalCartItems>1 && item.qty===1 && setRefresh!=null){
      setRefresh(true);
    }
    dispatch(
      removeFromCart({
        clientId,
        sourceId,
        itemId: item.id, // Pass the id of the item to be removed
      })
    );
    if(setRefresh!=null){
      setTimeout(() => {
        setRefresh(false);
      }, 300);
    }
  };
  return itemCount ? (
    <div className="bg-white border-2 border-green text-green px-2 py-1 rounded flex justify-between gap-5">
       <div className="minus-container flex justify-center items-center cursor-pointer" onClick={handleRemoveItem}>
        <Minus className="stroke-green" />
      </div>
      <h4>{itemCount}</h4>
      <div className="minus-container flex justify-center items-center cursor-pointer" onClick={handleAddItem}>
      <Plus className="stroke-green" />
      </div>
    </div>
  ) : (
    <button className="bg-white border-2 border-green text-green px-6 py-1 rounded" onClick={handleAddItem}>
      ADD
    </button>
  );
};
