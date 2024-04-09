import Alpine from "@/service/alpine";
import { useQuery } from "@tanstack/react-query";

export const useGetClientProducts = (totalTags?: any) => {
  const clientId = localStorage.getItem("clientId");
  return useQuery({
    queryKey: ["useGetClientProducts",clientId, totalTags],
    queryFn: () => Alpine.getClientProducts(clientId!),
  });
};
