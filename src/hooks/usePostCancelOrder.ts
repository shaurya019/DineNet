import Alpine from "@/service/alpine";
import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { defaultClientId, defaultSource } from '@/utils/constants';
import { RootState } from "@/service/store/cartStore";

export const usePostCancelOrder = (orderId: string) => {
  return useMutation({
    mutationKey: ["usePostOrder",],
    mutationFn: () => Alpine.cancelOrder(orderId),
  });
};
