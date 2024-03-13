import Alpine from "@/service/alpine";
import { RootState } from "@/service/store/cartStore";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

export const useGetClientProductsTax = () => {
  const { items} = useSelector((state: RootState) => state.cart);
  const itemCount = Object.keys(items).length;
  return useQuery({
    queryKey: ["useGetClientProducts",items,itemCount],
    queryFn: () => Alpine.getClientProductsTax(items),
  });
};
