import Alpine from "@/service/alpine";
import { useQuery } from "@tanstack/react-query";

export const useGetComplimentaryProductData = () => {
  const clientId = localStorage.getItem("clientId");
  return useQuery({
    queryKey: ["useGetComplimentaryProductData", clientId],
    queryFn: () => Alpine.getComplimentaryProductData(clientId!),
  });
};
