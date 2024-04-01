import Alpine from "@/service/alpine";
import { useQuery } from "@tanstack/react-query";

export const useGetTransactionStatus = (TransactionId:any) => {
  return useQuery({
    queryKey: ["useGetTransactionStatus", TransactionId],
    queryFn: () => Alpine.getTransactionStatus(TransactionId),
  });
};
