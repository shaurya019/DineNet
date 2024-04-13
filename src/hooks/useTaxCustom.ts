import { useEffect, useState } from 'react';
import { RootState } from "@/service/store/cartStore";
import { useSelector } from "react-redux";
import { useGetClientProductsTax } from "@/hooks/useGetClientProductsTax";

const useTaxCalculation = () => {
  const clientId = window.localStorage.getItem("clientId") || "1";
  const source = window.localStorage.getItem("source") || "1";
  const { carts } = useSelector((state: RootState) => state.cart);
  const clientCart = carts[clientId]?.[source];
  const items = clientCart ? clientCart.items : {};
  const itemCount = Object.keys(items).length;
    const [totalTax, setTotalTax] = useState(0);
    const [taxList, setTaxList] = useState<{ key: string; value: any; }[]>([]);
    const { data = [], isLoading } = useGetClientProductsTax();

    useEffect(() => {
     setTotalTax(data.total_amount);
     const amountBreakup = data.amount_breakup;
     if (amountBreakup && Object.keys(amountBreakup).length > 0) {
       const taxEntries = Object.entries(amountBreakup);
       const formattedTaxList = taxEntries.map(([key, value]) => ({ key, value }));
       setTaxList(formattedTaxList);
     }

    }, [data,itemCount]); 

    return { totalTax, taxList };
};

export default useTaxCalculation;

