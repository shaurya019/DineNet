import Alpine from "@/service/alpine";
import { useQuery } from "@tanstack/react-query";

export const useGetClientProducts = (client_id: string | null, totalTags?: any) => {
  const defaultClientId = client_id || "1"; // If client_id is null, use "1" as the default value
  return useQuery({
    queryKey: ["useGetClientProducts", defaultClientId, totalTags],
    queryFn: () => Alpine.getClientProducts(defaultClientId),
  });
};
