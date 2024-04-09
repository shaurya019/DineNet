import Alpine from "@/service/alpine";
import { useQuery } from "@tanstack/react-query";

export const useGetComplimentaryProductData = (id:any) => {
  return useQuery({
    queryKey: ["useGetComplimentaryProductData", id],
    queryFn: () => Alpine.getComplimentaryProductData(id!),
  });
};
