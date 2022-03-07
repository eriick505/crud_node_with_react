import { Route, Switch, useLocation } from "react-router-dom";

import { Box, Spinner } from "@chakra-ui/react";

import useAuth from "Hooks/useAuth";

import ProtectedRouter from "Components/Helpers/ProtectedRouter";

import PageHome from "Pages/Home";
import Login from "Pages/Login";
import PageAddProduct from "Pages/AddProduct";
import PageSignUp from "Pages/SignUp";

type CustomLocation = {
  pathname: string;
  search: string;
  hash: string;
  state: any;
};

function Routes() {
  const { handleUserData } = useAuth();
  const location = useLocation<{ pageAddProduct: CustomLocation }>();

  const showPageAddProduct = location.state && location.state.pageAddProduct;

  if (handleUserData.loading)
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        flexGrow={1}
      >
        <Spinner size="xl" />
      </Box>
    );

  return (
    <>
      <Switch location={showPageAddProduct || location}>
        <ProtectedRouter path="/" exact component={PageHome} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={PageSignUp} />
      </Switch>

      {showPageAddProduct && (
        <Route path="/add-product" exact component={PageAddProduct} />
      )}
    </>
  );
}

export default Routes;
