import Alpine from "@/service/alpine";
import { useQuery } from "@tanstack/react-query";

export const useGetOrderedDetails = (id:any) => {
  const clientId = localStorage.getItem("clientId");
  return useQuery({
    queryKey: ["id"],
    queryFn: () => Alpine.getOrderedDetails(id),
  });
};
