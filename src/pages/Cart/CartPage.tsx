import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import Nav from '../../components/Navbar';
import { RootState } from "@/service/store/cartStore";
import Empty from '../../components/EmptyCart'
import OrderDetails from '../../components/OrderDetails';
import Bottom from '../../components/Bottom';
import Bill from '../../components/Bill'
import Meal from '../../components/Meal'
import StripeComponent from '../../components/ContainerCart'

export const CartPage = () => {
  const { items,totalPrice } = useSelector((state: RootState) => state);
  const itemCount = Object.keys(items).length;
  console.log(totalPrice);
  return (
    <div>
       <Nav title="Cart"  show={itemCount !== 0 ? "True" : "False"} showEmpty={itemCount !== 0 ? "True" : "False"}/> 
      {itemCount === 0 ? <Empty /> : (
        <>
          <OrderDetails />
          <StripeComponent title="Complete meal with add ons"/>
          <Meal />
          <Bill totalPrice={totalPrice}/>
          <Bottom Heading="Home"/>
        </>
      )}
    </div>
  );
};

