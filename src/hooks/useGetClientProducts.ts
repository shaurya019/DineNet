import Alpine from "@/service/alpine";
import { useQuery } from "@tanstack/react-query";
export const useGetClientProducts = (client_id: string) => {
  return useQuery({
    queryKey: ["useGetClientProducts", client_id],
    queryFn: () => Alpine.getClientProducts(client_id),
    
  });
};
