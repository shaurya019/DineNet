import Alpine from "@/service/alpine";
import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { defaultClientId, defaultSource } from '@/utils/constants';
import { RootState } from "@/service/store/cartStore";

export const usePostOrderDetails = (name: any, phone: any, instruction: any, firebaseToken: any, ChooseOption: any) => {
  const clientId = window.localStorage.getItem("clientId") || defaultClientId;
  const source = window.localStorage.getItem("source") || defaultSource;
  const items = useSelector((state: RootState) => state.cart.carts[clientId]?.[source]?.items);
  return useMutation({
    mutationKey: ["usePostOrder",],
    mutationFn: () => Alpine.postOrderDetails(name,phone,instruction, firebaseToken,ChooseOption, items, clientId, source),
  });
};
