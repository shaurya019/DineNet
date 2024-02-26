import React from 'react'
import { useSelector } from "react-redux";
import Nav from '@/components/Navbar';
import { RootState } from "@/service/store/cartStore";
import EmptyCart from '@/components/EmptyCartComponent'
import OrderDetails from '@/components/OrderDetails';
import BottomSubmit from '@/components/BottomSubmit';
import TaxCharges from '@/components/TaxCharges'
import MealAddOns from '@/components/MealAddOns'
import StripeComponent from '../../components/ContainerCart'

export const CartPage = () => {
  const { items,totalPrice } = useSelector((state: RootState) => state);
  const itemCount = Object.keys(items).length;
  console.log(totalPrice);
  return (
    <div>
       <Nav title="Cart"  show={itemCount !== 0 ? "True" : "False"} showEmpty={itemCount !== 0 ? "True" : "False"}/> 
      {itemCount === 0 ? <EmptyCart /> : (
        <>
          <OrderDetails />
          <StripeComponent title="Complete meal with add ons"/>
          <MealAddOns />
          <TaxCharges totalPrice={totalPrice}/>
          <BottomSubmit Heading="Home"/>
        </>
      )}
    </div>
  );
};

