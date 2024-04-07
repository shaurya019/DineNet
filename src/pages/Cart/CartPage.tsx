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
import { useLocation } from "react-router";
import { getQueryParam } from "@/utils/routerUtils";
import Loader from "@/atomicComponents/Loader";

export const CartPage = () => {

  const location = useLocation();

  const {id} = location.state || {};

  const { items, totalPrice, cartTags } = useSelector((state: RootState) => state.cart);

  const itemCount = Object.keys(items).length;

  const { totalTax, taxList } = useTaxCalculation();

  const [meal,setMeal] = useState([]);
  const [refresh,setRefresh] = useState(false);
  const [add, setAdd] = useState<boolean>(false);
  const [save, setSave] = useState<boolean>(false);
  const [instruction, setInstruction] = useState('');

  const { data = [], isLoading } = useGetClientProducts(id.id,cartTags);


  useEffect(()=>{
    const filteredData = data.flatMap((category: any) => category.products);
    const filteredProducts = filteredData.filter((product: any) => !items[product.id]);
  const filteredProducted = filteredProducts.filter((product:any) =>
    product.tags.some((tag:any) => cartTags.includes(tag))
  );
  setMeal(filteredProducted);

  },[cartTags, data,]);

  if(refresh || isLoading) return (
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
            add={add} 
            setAdd={setAdd} 
            save={save} 
            setSave={setSave} 
            instruction={instruction} 
            setInstruction={setInstruction} 
          />
          <StripeComponent title="Complete meal with add ons" />
          <MealAddOns meals={meal} refresh={refresh} setRefresh={setRefresh} />
          <TaxCharges totalPrice={totalPrice} totalTax={totalTax} taxList={taxList}/>
          <BottomSubmit Heading="Proceed" path="PaymentMade" clientId={id.id} roomNo={id.roomNo} instruction={instruction}/>
        </>
      )}
    </div>
  );
};


