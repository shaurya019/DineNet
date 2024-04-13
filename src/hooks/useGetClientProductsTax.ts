import Alpine from "@/service/alpine";
import { RootState } from "@/service/store/cartStore";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

export const useGetClientProductsTax = () => {
  const clientId = localStorage.getItem("clientId") || "1";
  const sourceId = localStorage.getItem("sourceId") || "1";
  const { carts } = useSelector((state: RootState) => state.cart);
  const clientCart = carts[clientId]?.[sourceId];
  const items = clientCart ? clientCart.items : {};
  const itemCount = Object.keys(items).length;
  return useQuery({
    queryKey: ["useGetClientProducts",items,itemCount],
    queryFn: () => Alpine.getClientProductsTax(items),
  });
};
