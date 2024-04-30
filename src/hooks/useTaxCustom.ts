import { useEffect, useState } from 'react';
import { RootState } from "@/service/store/cartStore";
import { useSelector } from "react-redux";
import { useGetClientProductsTax } from "@/hooks/useGetClientProductsTax";
import { defaultClientId as clientId, defaultSource as source } from '@/utils/constants';

const useTaxCalculation = () => {
  const { carts } = useSelector((state: RootState) => state.cart);
  const clientCart = carts[clientId]?.[source];
  const items = clientCart ? clientCart.items : {};
  const itemCount = Object.keys(items).length;
    const [totalTax, setTotalTax] = useState(0);
    const [taxList, setTaxList] = useState<{ key: string; value: any; }[]>([]);
    const { data = [] } = useGetClientProductsTax();

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

