import Alpine from "@/service/alpine";
import { useQuery } from "@tanstack/react-query";

export const useGetOrderedDetails = () => {
  return useQuery({
    queryKey: ["id"],
    queryFn: () => Alpine.getOrderedDetails(),
  });
};
