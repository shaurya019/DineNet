import Alpine from "@/service/alpine";
import { useQuery } from "@tanstack/react-query";

export const useComplimenatryProductCategory = (client_id:any) => {
  return useQuery({
    queryKey: ["useComplimenatryProductCategory", client_id],
    queryFn: () => Alpine.complimenatryProductCategory(client_id),
  });
};
