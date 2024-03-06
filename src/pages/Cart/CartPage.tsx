import React, { useState,useEffect } from 'react';
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
  const {
    cart: { items, totalPrice },
  } = useSelector((state: RootState) => state);
  const itemCount = Object.keys(items).length;
  const itemQuantity = items[1]?.qty;
    const [totalTax, setTotalTax] = useState(0);
    const [cgst, setCgst] = useState(0);
    const [sgst, setSgst] = useState(0);
  
    useEffect(() => {
      const calculateTax = async () => {
        try {
          const requestBody = {
            product_quantities: [
              {
                product_id: 1,
                quantity: itemQuantity
              }
            ]
          };
  
          const response = await fetch('http://alpine-staging-lb-1249159613.ap-south-1.elb.amazonaws.com/api/v1/orders/calculate_tax', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
          });
  
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const responseData = await response.json();
          const totalTax = responseData.total_tax;
          const taxDetail = responseData.tax_detail;
          const cgst = taxDetail.CGST;
          const sgst = taxDetail.SGST;
  
          setTotalTax(totalTax);
          setCgst(cgst);
          setSgst(sgst);
        } catch (error) {
          console.error('Error occurred:', error);
        }
      };
  
      calculateTax();
    }, [totalPrice]);
  
    return (
      <div>
        <Nav title="Cart" show={itemCount !== 0 ? "True" : "False"} showEmpty={itemCount !== 0 ? "True" : "False"} />
        {itemCount === 0 ? <EmptyCart /> : (
          <>
            <OrderDetails />
            <StripeComponent title="Complete meal with add ons" />
            <MealAddOns />
            <TaxCharges totalPrice={totalPrice} totalTax={totalTax} cgst={cgst} sgst={sgst} serviceCharge={0} />
            <BottomSubmit Heading="Home" />
          </>
        )}
      </div>
    );
  };