import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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
import { jwtDecode } from "jwt-decode";
import { defaultClientId, defaultSource } from '@/utils/constants';

interface JwtPayload {
  name?: string;
  mobile_number?: string;
}


export const PaymentMadePage = () => {
  const clientId = window.localStorage.getItem("clientId") || defaultClientId;
  const source = window.localStorage.getItem("source") || defaultSource;
  const location = useLocation();

  const instruction = location.state && location.state.instruction;


  // Redux Cart Data
  const { carts } = useSelector((state: RootState) => state.cart);
  const clientCart = carts[clientId]?.[source];
  const totalPrice = clientCart ? clientCart.totalPrice : 0;
  // Redux User Data
  const { phone, firebaseToken } = useSelector((state: RootState) => state.user);
  // TaxCalculation API
  const { totalTax, taxList } = useTaxCalculation();

  // Hooks
  const [phonex, setPhonex] = useState(phone ?? '');
  const [namex, setNamex] = useState<any | null>('');
  const [submit, setSubmit] = useState(false);
  const [final, setFinal] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('Option3');

  useEffect(() => {
    // Retrieve the token from local storage
    const storedToken = localStorage.getItem('authToken');

    // Check if the token exists
    if (storedToken) {
      const decoded: JwtPayload = jwtDecode(storedToken);
      const name = decoded.name || '';
      const phone = decoded.mobile_number || '';
      setNamex(name);
      setPhonex(phone);

    } else {
      console.log('No token found in local storage');
    }
  }, []);

  return (
    <>
      <Nav title="Payment" show="True" showEmpty="False" />
      <StripeComponent title="Order Details" />
      <InputFormComponent final={final} submit={submit} phone={phonex} name={namex} setPhone={setPhonex} setName={setNamex} />
      {/* <div className="bg-green-light text-white py-2 px-3.5 flex justify-between items-center">
        <div className="flex items-left">
          <span className="font-semibold text-xs text-green-mineral">Choose Payment Method</span>
        </div>
      </div>
      <PaymentMethodChoose submit={submit} final={final} setSubmit={setSubmit} Option={selectedOption} SelectedOption={setSelectedOption} /> */}
      <BillDetailsComp totalPrice={totalPrice} totalTax={totalTax} taxList={taxList} />
 {/* <BottomNoteComp /> */}
      <BottomSubmit Heading="Place Order" phone={phonex} name={namex} submit={submit} setSubmit={setSubmit} setFinal={setFinal} instruction={instruction}
        ChooseOption="OFFLINE"
        path="OrderPage" />
    </>
  )
}


