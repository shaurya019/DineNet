import Alpine from "@/service/alpine";
import { useQuery } from "@tanstack/react-query";


export const useGetReOrder = (orderId: any) => {
  return useQuery({
    queryKey: [orderId],
    queryFn: () => Alpine.postReOrder(orderId),
    enabled: !!orderId,
  });
};
