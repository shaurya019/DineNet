import Alpine from "@/service/alpine";
import { useMutation } from "@tanstack/react-query";

export const usePostComplimentaryOrder = (textRequest:any,imageFile:any) => {
  return useMutation({
    mutationKey : ["usePostOrder", ],
    mutationFn: () => Alpine.postComplimentaryOrder(textRequest,imageFile),
  });
};