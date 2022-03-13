import { ReactQueryDevtools } from "react-query/devtools";

import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

import { queryClient } from "Services/queryClient";

import { AuthProvider } from "Contexts/Auth";

import Routes from "routes";

import Header from "Components/Header";
import Footer from "Components/Footer";

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
