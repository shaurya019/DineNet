import React from 'react'
import Confirmation from "@/components/Confirmation"
import {OrderConfirmation} from "@/assets/icons/OrderConfirmation"

export const OrderPage = () => {
  return (
    <Confirmation title="Yay!!" message1="Order Placed Successfully for TN 06" message2="Your order estimated" message3="serving time is 20 mins" message4="Thank you for your patience. We will serve you as soon as possible" buttonName="Track Order" svg={<OrderConfirmation />} />
  )
}

