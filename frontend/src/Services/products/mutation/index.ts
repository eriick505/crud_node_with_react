import { useToast } from "@chakra-ui/react";
import { useMutation } from "react-query";

import { queryClient } from "Services/queryClient";
import { POST_CREATE_PRODUCT, DELETE_PRODUCT } from "../service";

export function useDeleteProductMutation() {
  const toast = useToast();

  return useMutation((id: number) => DELETE_PRODUCT(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("productList");

      toast({
        description: "Produto deletado com sucesso.",
        status: "error",
        position: "top-right",
        isClosable: true,
      });
    },
  });
}

export function useCreateProductMutation() {
  const toast = useToast();

  return useMutation((formData: FormData) => POST_CREATE_PRODUCT(formData), {
    onSuccess: () => {
      queryClient.invalidateQueries("productList");

      toast({
        description: "Produto cadastrado com sucesso.",
        status: "success",
        position: "top-right",
        isClosable: true,
      });
    },
  });
}
