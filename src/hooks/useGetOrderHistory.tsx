import Alpine from "@/service/alpine";
import { useQuery } from "@tanstack/react-query";

export const useGetOrderHistory = () => {
  return useQuery({
    queryKey: ["useGetOrderHistory", ],
    queryFn: () => Alpine.getOrderHistory(),
  });
};
