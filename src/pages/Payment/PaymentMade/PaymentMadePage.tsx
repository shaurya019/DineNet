import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { RootState } from "@/service/store/cartStore";
import Nav from '@/components/Navbar';
import BottomSubmit from '@/atomicComponents/BottomSubmit';
import StripeComponent from '@/components/ContainerCart'
import { BottomNoteComp } from '@/components/BottomNote/BottomNoteComp'
import InputFormComponent from '@/components/InputForm'
import PaymentMethodChoose from '@/components/PaymentMethodChoose'
import BillDetailsComp from '@/components/BillDetails'
import useTaxCalculation from '@/hooks/useTaxCustom'


export const PaymentMadePage = () => {


  // Redux Cart Data
  const { totalPrice } = useSelector((state: RootState) => state.cart);

  // Redux User Data
  const { phone, firebaseToken } = useSelector((state: RootState) => state.user);
  // TaxCalculation API
  const { totalTax, taxList } = useTaxCalculation();

  // Hooks
  const [phonex, setPhonex] = useState(phone ?? '');
  const [namex, setNamex] = useState('');
  const [submit, setSubmit] = useState(false);
  const [final, setFinal] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('Option3');
  
  return (
    <>
      <Nav title="Payment" show="True" showEmpty="False" />
      <StripeComponent title="Order Details" />
      <InputFormComponent final={final} submit={submit} phone={phonex} name={namex} setPhone={setPhonex} setName={setNamex} />
      <div className="bg-green-light text-white py-2 px-3.5 flex justify-between items-center">
        <div className="flex items-left">
          <span className="font-semibold text-xs text-green-mineral">Choose Payment Method</span>
        </div>
      </div>
      <PaymentMethodChoose submit={submit} final={final}  setSubmit={setSubmit} Option={selectedOption} SelectedOption={setSelectedOption} />
      <BillDetailsComp totalPrice={totalPrice} totalTax={totalTax} taxList={taxList} />
      <BottomNoteComp />
      <BottomSubmit Heading="Place Order" phone={phonex} name={namex} submit={submit} setSubmit={setSubmit} setFinal={setFinal} ChooseOption={selectedOption} path="OrderPage" />
    </>
  )
}


