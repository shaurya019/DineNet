import Alpine from "@/service/alpine";
import { useQuery } from "@tanstack/react-query";

export const useGetOrderDetails = () => {
  return useQuery({
    queryKey: ["useGetOrderDetails", ],
    queryFn: () => Alpine.getOrderDetails(),
  });
};
