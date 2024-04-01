import Alpine from "@/service/alpine";
import { useQuery } from "@tanstack/react-query";

export const useGetOrderedDetails = (id:string) => {
  console.log("GetId",id,typeof id);
  return useQuery({
    queryKey: ["useGetOrderedDetails", ],
    queryFn: () => Alpine.getOrderedDetails(id),
  });
};
