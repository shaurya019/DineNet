import Alpine from "@/service/alpine";
import { RootState } from "@/service/store/cartStore";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { defaultClientId, defaultSource } from '@/utils/constants';

export const useGetClientProductsTax = () => {

  const clientId = window.localStorage.getItem("clientId") || defaultClientId;
  const source = window.localStorage.getItem("source") || defaultSource;
  const { carts } = useSelector((state: RootState) => state.cart);
  const clientCart = carts[clientId]?.[source];
  const items = clientCart ? clientCart.items : {};
  const itemCount = Object.keys(items).length;
  return useQuery({
    queryKey: ["useGetClientProducts", items, itemCount],
    queryFn: () => Alpine.getClientProductsTax(items),
  });
};
