import Alpine from "@/service/alpine";
import { useMutation } from "@tanstack/react-query";

export const usePostComplimentaryOrder = (productId:any,textRequest:any,imageFile:any) => {
  const sourceId = localStorage.getItem("sourceId") ?? "1";
  console.log("room",sourceId);
  return useMutation({
    mutationKey : ["usePostOrder",],
    mutationFn: () => Alpine.postComplimentaryOrder(productId,textRequest,imageFile,sourceId),
  });
};