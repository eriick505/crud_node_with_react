import { ReactQueryDevtools } from "react-query/devtools";

import { BrowserRouter } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

import { QueryClientProvider } from "react-query";
import { queryClient } from "Services/queryClient";

import AuthProvider from "Contexts/Login";

import Header from "Components/Header";
import Footer from "Components/Footer";
import Routes from "routes";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Flex as="main" grow={1} align="center">
            <Routes />
          </Flex>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
