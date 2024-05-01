import Alpine from "@/service/alpine";
import { useQuery } from "@tanstack/react-query";
import { defaultClientId as clientId } from '@/utils/constants';

export const useComplimenatryProductCategory = () => {
  return useQuery({
    queryKey: ["useComplimenatryProductCategory",],
    queryFn: () => Alpine.complimenatryProductCategory(clientId!),
  });
};
