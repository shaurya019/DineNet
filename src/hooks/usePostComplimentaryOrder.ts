import Alpine from "@/service/alpine";
import { useMutation } from "@tanstack/react-query";

export const usePostComplimentaryOrder = (productId:any,textRequest:any,imageFile:any,roomNo:any) => {
  return useMutation({
    mutationKey : ["usePostOrder",],
    mutationFn: () => Alpine.postComplimentaryOrder(productId,textRequest,imageFile,roomNo),
  });
};