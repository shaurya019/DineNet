import Alpine from "@/service/alpine";
import { useMutation } from "@tanstack/react-query";
import { defaultClientId, defaultSource } from '@/utils/constants';

export const usePostOrderDetails = (name: any, phone: any, instruction: any, firebaseToken: any, ChooseOption: any, items: any) => {
  const clientId = window.localStorage.getItem("clientId") || defaultClientId;
  const source = window.localStorage.getItem("source") || defaultSource;
  return useMutation({
    mutationKey: ["usePostOrder",],
    mutationFn: () => Alpine.postOrderDetails(name, phone, instruction, firebaseToken, ChooseOption, items, clientId, source),
  });
};
