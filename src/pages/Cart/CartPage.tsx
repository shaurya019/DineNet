import React from 'react'
import Nav from '../../components/Navbar';
import Empty from '../../components/EmptyCart'
import OrderDetails from '../../components/OrderDetails';
import Bottom from '../../components/Bottom';
import Bill from '../../components/Bill'
import Meal from '../../components/Meal'
import StripeComponent from '../../components/ContainerCart'

export const CartPage = () => {
  return (
    <div>
      <Nav title="Cart"  show="True" showEmpty="True"/> 
      {/* <Empty /> */}
       <OrderDetails />
       <StripeComponent title="Complete meal with add ons"/>
      <Meal />
      <Bill /> 
      <Bottom Heading="Home"/>
    </div>
  )
}


