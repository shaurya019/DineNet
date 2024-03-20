import Alpine from "@/service/alpine";
import { useMutation } from "@tanstack/react-query";

export const usePostOrderDetails = (name:any, phone:any, firebaseToken:any, ChooseOption:any , items:any) => {
  return useMutation({
    mutationKey : ["usePostOrder", ],
    mutationFn: () => Alpine.postOrderDetails(name, phone, firebaseToken, ChooseOption,items),
  });
};
