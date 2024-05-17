import Alpine from "@/service/alpine";
import { useQuery } from "@tanstack/react-query";
import { defaultClientId } from '@/utils/constants';

export const useComplimenatryProductCategory = () => {
  const clientId = window.localStorage.getItem("clientId") || defaultClientId;

  return useQuery({
    queryKey: ["useComplimenatryProductCategory",],
    queryFn: () => Alpine.complimenatryProductCategory(clientId!),
  });
};
