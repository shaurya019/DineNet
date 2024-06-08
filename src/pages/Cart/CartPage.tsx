import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Nav from '@/components/Navbar';
import { RootState } from "@/service/store/cartStore";
import EmptyCart from '@/components/EmptyCartComponent'
import OrderDetails from '@/components/OrderDetails';
import BottomSubmit from '@/atomicComponents/BottomSubmit';
import TaxCharges from '@/components/TaxCharges'
import MealAddOns from '@/components/MealAddOns'
import StripeComponent from '@/components/ContainerCart'
import useTaxCalculation from '@/hooks/useTaxCustom'
import { useGetClientProducts } from "@/hooks/useGetClientProducts";
import Loader from "@/atomicComponents/Loader";
import { defaultClientId, defaultSource } from '@/utils/constants';

export const CartPage = () => {
  const clientId = window.localStorage.getItem("clientId") || defaultClientId;
  const source = window.localStorage.getItem("source") || defaultSource;
  const cartData = useSelector((state: RootState) => state.cart.carts[clientId]?.[source]);
  const items = cartData ? cartData.items : {};
  const totalPrice = cartData ? cartData.totalPrice : 0;
  const cartTags = cartData ? cartData.cartTags : [];


  const itemCount = Object.keys(items).length;

  const { totalTax, taxList } = useTaxCalculation();

  const [meal, setMeal] = useState<any[]>([]);
  const [outOfStock, setOutOfStock] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [add, setAdd] = useState<boolean>(false);
  const [save, setSave] = useState<boolean>(false);
  const [instruction, setInstruction] = useState('');

  const { data = [], isLoading } = useGetClientProducts(clientId, cartTags);

  useEffect(() => {
    if (data && data.category_map) {
      const filteredData = data.category_map?.flatMap((category: any) => category.products);
      const filteredProducts = filteredData.filter((product: any) => !items[product.id]);
      const MealProducts = filteredProducts.filter((product: any) =>
        product.tags?.some((tag: any) => cartTags.includes(tag))
      );
      setMeal(MealProducts);
    }
  }, [cartTags, data, items]);

  if (refresh || isLoading) return (
    <div className="flex flex-1 items-center justify-center h-screen">
      <Loader />
    </div>
  );

  return (
    <div>
      <Nav title="Cart" show={itemCount !== 0 ? "True" : "False"} showEmpty={itemCount !== 0 ? "True" : "False"} />
      {itemCount === 0 ? <EmptyCart /> : (
        <>
          <OrderDetails
            setRefresh={setRefresh}
            setOutOfStock={setOutOfStock}
            add={add}
            setAdd={setAdd}
            save={save}
            setSave={setSave}
            instruction={instruction}
            setInstruction={setInstruction}
            meals={meal}
          />
          {meal.length > 0 && <StripeComponent title="Complete meal with add ons" />}
          {meal.length > 0 && <MealAddOns meals={meal} refresh={refresh} setRefresh={setRefresh} />}
          <TaxCharges totalPrice={totalPrice} totalTax={totalTax} taxList={taxList} />
          <BottomSubmit outOfStock={outOfStock} Heading="Proceed" path="PaymentMade" instruction={instruction} />
        </>
      )}
    </div>
  );
};


