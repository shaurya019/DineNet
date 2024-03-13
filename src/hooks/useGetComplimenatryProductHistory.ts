import Alpine from "@/service/alpine";
import { useQuery } from "@tanstack/react-query";

export const useGetComplimenatryProductHistory = () => {
  return useQuery({
    queryKey: ["useGetOrderHistory", ],
    queryFn: () => Alpine.getComplimenatryProductHistory(),
  });
};
