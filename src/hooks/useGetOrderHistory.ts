import Alpine from "@/service/alpine";
import { useQuery } from "@tanstack/react-query";

export const useGetOrderHistory = (page:any) => {
  return useQuery({
    queryKey: ["useGetOrderHistory", ],
    queryFn: () => Alpine.getOrderHistory(page),
  });
};
