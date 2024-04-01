import Alpine from "@/service/alpine";
import { useQuery } from "@tanstack/react-query";

export const useGetClientProducts = (client_id: string,totalTags?:any) => {
  return useQuery({
    queryKey: ["useGetClientProducts", client_id,totalTags],
    queryFn: () => Alpine.getClientProducts(client_id),
  });
};
