import React,{useState} from 'react'
import Nav from '../../../components/Navbar';
import Bottom from '../../../components/Bottom';
import StripeComponent from '../../../components/ContainerCart'
import {NoteComp} from '../../../components/Note/NoteComp'
import {InputBoxComp} from '../../../components/InputBox/InputBoxComp'
import SelectBoxComp from '../../../components/SelectBox/'
import BillDetails from '../../../components/BillDetails'


export const PaymentMadePage = () => {
  const [paySubmit, setPaySubmit] = useState(false);
  return (
    <>
       <Nav title="Payment"  show="True" showEmpty="False"/> 
    <StripeComponent title="Order Details"/>
    <InputBoxComp />
    <div className="bg-green-light text-white py-2 px-3.5 flex justify-between items-center">
      <div className="flex items-left">
        <span className="font-semibold text-xs text-green-mineral">Choose Payment Method</span>
      </div>
      </div>
      <SelectBoxComp paySubmit={paySubmit} />
    <BillDetails />
    <NoteComp />
      <Bottom Heading="Place Order" Pass="Payment" setPaySubmit={setPaySubmit}/> 
      </>
)
}


