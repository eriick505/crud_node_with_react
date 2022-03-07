import { ChangeEvent, FormEvent, useState } from "react";

import { Button, Flex, Box, Badge, Input } from "@chakra-ui/react";

import { FiSmile } from "react-icons/fi";

import useInput from "Hooks/useInput";

import { useCreateProductMutation } from "Services/products";

import FormInputControl from "Components/FormInputControl";
import FormButton from "Components/FormButton";

type ImageUpload = {
  preview: string;
  raw: any;
};

function FormAddProduct() {
  const name = useInput();
  const price = useInput();

  const [image, setImage] = useState({} as ImageUpload);

  const createProduct = useCreateProductMutation();

  const handleChangeInputUpload = ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    const file = target.files?.[0];

    if (file) {
      setImage({
        preview: URL.createObjectURL(file),
        raw: file,
      });
    }
  };

  const restartCreateProduct = () => {
    createProduct.reset();

    name.setValue("");
    price.setValue("");
    setImage({} as ImageUpload);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name.value);
    formData.append("price", price.value);
    formData.append("product_image", image.raw);

    if (!image.raw) return;

    createProduct.mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex mb={4}>
        <FormInputControl
          required
          disabled={createProduct.isSuccess}
          mr={4}
          label="Nome do produto"
          type="text"
          name="nomeProduto"
          {...name}
        />
        <FormInputControl
          required
          disabled={createProduct.isSuccess}
          label="Preço"
          type="number"
          name="precoProduto"
          {...price}
        />
      </Flex>

      <Input
        required
        p={0}
        mb={4}
        border={0}
        disabled={createProduct.isSuccess}
        type="file"
        name="imgProduto"
        onChange={handleChangeInputUpload}
      />

      {image.preview && (
        <Box
          w="100%"
          my={4}
          height={300}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundImage={image.preview}
        />
      )}

      <Flex justifyContent="space-between">
        {createProduct.isSuccess && (
          <>
            <Badge variant="subtle" colorScheme="green" p={3}>
              Cadastrado com sucesso! <FiSmile style={{ display: "inline" }} />
            </Badge>

            <Button colorScheme="green" onClick={restartCreateProduct}>
              Cadastrar outro?
            </Button>
          </>
        )}

        {createProduct.isError && (
          <Badge
            p={2}
            mb={3}
            variant="subtle"
            colorScheme="red"
            width="100%"
            textAlign="center"
          >
            Falha ao cadastrar o produto
          </Badge>
        )}
      </Flex>

      {!createProduct.isSuccess && (
        <FormButton
          type="submit"
          loadingText="Cadastrando..."
          width="100%"
          text="Cadastrar"
          loading={createProduct.isLoading}
        />
      )}
    </form>
  );
}

export default FormAddProduct;
