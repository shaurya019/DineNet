import Alpine from "@/service/alpine";
import { useQuery } from "@tanstack/react-query";

export const useGetComplimenatryProductHistory = (page:any) => {
  return useQuery({
    queryKey: ["useGetOrderHistory",page ],
    queryFn: () => Alpine.getComplimenatryProductHistory(page),
  });
};
