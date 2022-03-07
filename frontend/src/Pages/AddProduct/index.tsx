import { useHistory } from "react-router-dom";

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

import FormAddProduct from "Components/FormAddProduct";
import { useDisableRefetchOnFocus } from "Hooks/useDisableRefetchOnFocus";

function PageAddProduct() {
  useDisableRefetchOnFocus();
  const history = useHistory();

  const handleClose = () => history.goBack();

  return (
    <Modal closeOnOverlayClick={false} isOpen={true} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Adicionar Produto</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={5}>
          <FormAddProduct />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default PageAddProduct;
