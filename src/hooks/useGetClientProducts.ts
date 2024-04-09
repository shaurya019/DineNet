import Alpine from "@/service/alpine";
import { useQuery } from "@tanstack/react-query";

export const useGetClientProducts = (clientId:any,totalTags?: any) => {
  return useQuery({
    queryKey: ["useGetClientProducts",clientId, totalTags],
    queryFn: () => Alpine.getClientProducts(clientId!),
  });
};
