import Alpine from "@/service/alpine";
import { useQuery } from "@tanstack/react-query";

export const useGetComplimentaryProductData = (client_id: string) => {
  return useQuery({
    queryKey: ["useGetComplimentaryProductData", client_id],
    queryFn: () => Alpine.getComplimentaryProductData(client_id),
  });
};
