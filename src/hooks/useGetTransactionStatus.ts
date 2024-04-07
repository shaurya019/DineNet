import Alpine from "@/service/alpine";
import { useQuery } from "@tanstack/react-query";

export const useGetTransactionStatus = (TransactionId:any) => {
  return useQuery({
    queryKey: [TransactionId],
    queryFn: () => Alpine.getTransactionStatus(TransactionId),
    enabled: !!TransactionId,
  });
};
