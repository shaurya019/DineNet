import Alpine from "@/service/alpine";
import { RootState } from "@/service/store/cartStore";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

export const useGetClientProductsTax = () => {
  const clientId = window.localStorage.getItem("clientId") || "1";
  const source = window.localStorage.getItem("source") || "1";
  const { carts } = useSelector((state: RootState) => state.cart);
  const clientCart = carts[clientId]?.[source];
  const items = clientCart ? clientCart.items : {};
  const itemCount = Object.keys(items).length;
  return useQuery({
    queryKey: ["useGetClientProducts",items,itemCount],
    queryFn: () => Alpine.getClientProductsTax(items),
  });
};
