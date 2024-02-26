import React,{useState} from 'react'
import Nav from '@/components/Navbar';
import BottomSubmit from '@/components/BottomSubmit';
import StripeComponent from '@/components/ContainerCart'
import {BottomNoteComp} from '@/components/BottomNote/BottomNoteComp'
import InputFormComponent from '@/components/InputForm'
import PaymentMethodChoose from '@/components/PaymentMethodChoose'
import BillDetails from '@/components/BillDetails'


export const PaymentMadePage = () => {
  const [paySubmit, setPaySubmit] = useState(false);
  return (
    <>
       <Nav title="Payment"  show="True" showEmpty="False"/> 
    <StripeComponent title="Order Details"/>
    <InputFormComponent />
    <div className="bg-green-light text-white py-2 px-3.5 flex justify-between items-center">
      <div className="flex items-left">
        <span className="font-semibold text-xs text-green-mineral">Choose Payment Method</span>
      </div>
      </div>
      <PaymentMethodChoose paySubmit={paySubmit} />
    <BillDetails />
    <BottomNoteComp />
      <BottomSubmit Heading="Place Order" Pass="Payment" setPaySubmit={setPaySubmit}/> 
      </>
)
}


