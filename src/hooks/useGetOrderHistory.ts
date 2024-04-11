import Alpine from "@/service/alpine";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RootState } from "@/service/store/cartStore";

export const useGetOrderHistory = (page:any) => {
  const { loggedIn } = useSelector((state: RootState) => state.user);
  return useQuery({
    queryKey: ["useGetOrderHistory", page],
    queryFn: () => Alpine.getOrderHistory(page),
    enabled: !!loggedIn,
  });
};
