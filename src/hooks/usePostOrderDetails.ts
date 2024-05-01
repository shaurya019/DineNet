import Alpine from "@/service/alpine";
import { useMutation } from "@tanstack/react-query";
import { defaultClientId as clientId, defaultSource as source } from '@/utils/constants';

export const usePostOrderDetails = (name:any, phone:any,instruction:any, firebaseToken:any, ChooseOption:any , items:any) => {
  return useMutation({
    mutationKey : ["usePostOrder", ],
    mutationFn: () => Alpine.postOrderDetails(name, phone,instruction, firebaseToken, ChooseOption,items,clientId,source),
  });
};
