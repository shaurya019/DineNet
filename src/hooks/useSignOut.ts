import Alpine from "@/service/alpine";
import { useMutation } from "@tanstack/react-query";

export const useSignOut = () => {
  return useMutation({
    mutationKey: ["useSignOut"],
    mutationFn: () => Alpine.signOut(),
  });
};
