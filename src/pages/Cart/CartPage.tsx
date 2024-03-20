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

export const CartPage = () => {
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);
  const itemCount = Object.keys(items).length;
  const { totalTax, taxList } = useTaxCalculation();

  return (
    <div>
      <Nav title="Cart" show={itemCount !== 0 ? "True" : "False"} showEmpty={itemCount !== 0 ? "True" : "False"} />
      {itemCount === 0 ? <EmptyCart /> : (
        <>
          <OrderDetails />
          <StripeComponent title="Complete meal with add ons" />
          <MealAddOns />
          <TaxCharges totalPrice={totalPrice} totalTax={totalTax} taxList={taxList}/>
          <BottomSubmit Heading="Proceed" path="PaymentMade" />
        </>
      )}
    </div>
  );
};