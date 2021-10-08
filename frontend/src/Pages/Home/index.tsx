import ProductList from "Components/ProductList";
import useLogin from "Hooks/useLogin";

function PageHome() {
  const { data } = useLogin();

  return (
    <>
      <h1>{data.name}</h1>
      <ProductList />
    </>
  );
}

export default PageHome;
