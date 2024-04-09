import Alpine from "@/service/alpine";
import { useMutation } from "@tanstack/react-query";

export const usePostOrderDetails = (name:any, phone:any,instruction:any, firebaseToken:any, ChooseOption:any , items:any) => {
  const roomNo = localStorage.getItem("roomNo");
  const clientId = localStorage.getItem("clientId");
  return useMutation({
    mutationKey : ["usePostOrder", ],
    mutationFn: () => Alpine.postOrderDetails(name, phone,instruction, firebaseToken, ChooseOption,items,clientId,roomNo),
  });
};
