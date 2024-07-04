import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Nav from '@/components/Navbar';
import { RootState } from "@/service/store/cartStore";
import EmptyCart from '@/components/EmptyCartComponent';
import OrderDetails from '@/components/OrderDetails';
import BottomSubmit from '@/atomicComponents/BottomSubmit';
import TaxCharges from '@/components/TaxCharges';
import MealAddOns from '@/components/MealAddOns';
import StripeComponent from '@/components/ContainerCart';
import useTaxCalculation from '@/hooks/useTaxCustom';
import { useGetClientProducts } from "@/hooks/useGetClientProducts";
import Loader from "@/atomicComponents/Loader";
import { jwtDecode } from "jwt-decode";
import { defaultClientId, defaultSource } from '@/utils/constants';
import { InputFormComponent } from "@/components/InputForm/InputFormComponent";

interface JwtPayload {
  name?: string;
  mobile_number?: string;
}

export const CartPage = () => {
  const clientId = window.localStorage.getItem("clientId") || defaultClientId;
  const source = window.localStorage.getItem("source") || defaultSource;
  const cartData = useSelector((state: RootState) => state.cart.carts[clientId]?.[source]);
  const items = cartData ? cartData.items : {};
  const totalPrice = cartData ? cartData.totalPrice : 0;
  const cartTags = cartData ? cartData.cartTags : [];
  const itemCount = Object.keys(items).length;
  const { data = [], isLoading } = useGetClientProducts(clientId, cartTags);
  const { totalTax, taxList } = useTaxCalculation();

  const [meal, setMeal] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [outOfStock, setOutOfStock] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [add, setAdd] = useState<boolean>(false);
  const [save, setSave] = useState<boolean>(false);
  const [instruction, setInstruction] = useState('');
  const [namex, setNamex] = useState<any | null>('');
  const [submit, setSubmit] = useState(false);
  const [final, setFinal] = useState(false);
  const [showBill, setShowBill] = useState(false);
  const [showBillDetails, setShowBillDetails] = useState(false);
  // const [selectedOption, setSelectedOption] = useState<string>('Option3');

  useEffect(() => {
    if (data && data?.category_map && data?.client) {
      setShowBill(data?.client?.client_preferences?.show_bill_in_cart);
      setShowBillDetails(data?.client?.client_preferences?.show_want_bill);
      const filtered_data = data.category_map?.flatMap((category: any) => category.products);
      const filteredProducts = filtered_data.filter((product: any) => !items[product.id]);
      const MealProducts = filteredProducts.filter((product: any) =>
        product.tags?.some((tag: any) => cartTags.includes(tag))
      );
      setMeal(MealProducts);
      setFilteredData(filtered_data);
    }
  }, [cartTags, data, items]);

  useEffect(() => {
    // Retrieve the token from local storage
    const storedToken = localStorage.getItem('authToken');

    // Check if the token exists
    if (storedToken) {
      const decoded: JwtPayload = jwtDecode(storedToken);
      const name = decoded.name || '';
      const phone = decoded.mobile_number || '';
      setNamex(name);

    }
  }, []);

  if (refresh || isLoading) {
    return (
      <div className="flex flex-1 items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <Nav title="Cart" show={itemCount !== 0 ? "True" : "False"} showEmpty={itemCount !== 0 ? "True" : "False"} />
      {itemCount === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <StripeComponent title="Personal Details" />
          <InputFormComponent final={final} submit={submit} name={namex} setName={setNamex} />
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
            filteredData={filteredData}
          />
          {meal.length > 0 && <StripeComponent title="Complete meal with add ons" />}
          {meal.length > 0 && <MealAddOns meals={meal} refresh={refresh} setRefresh={setRefresh} />}
          {showBill && <TaxCharges totalPrice={totalPrice} totalTax={totalTax} taxList={taxList} />}
          <BottomSubmit
            Heading="Place Order"
            outOfStock={outOfStock}
            name={namex}
            submit={submit}
            setSubmit={setSubmit}
            setFinal={setFinal}
            instruction={instruction}
            ChooseOption="OFFLINE"
            path="OrderPage"
            showBillDetails = {showBillDetails}
          />
        </>
      )}
    </div>
  );
};
