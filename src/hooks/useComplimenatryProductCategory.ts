import Alpine from "@/service/alpine";
import { useQuery } from "@tanstack/react-query";

export const useComplimenatryProductCategory = () => {
  const clientId = localStorage.getItem("clientId");
  return useQuery({
    queryKey: ["useComplimenatryProductCategory",],
    queryFn: () => Alpine.complimenatryProductCategory(clientId!),
  });
};
