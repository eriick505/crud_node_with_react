import { BrowserRouter } from "react-router-dom";

import LoginProvider from "Contexts/Login";

import Header from "Components/Header";
import Main from "Components/Main";
import Footer from "Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <LoginProvider>
        <Header />
        <Main />
        <Footer />
      </LoginProvider>
    </BrowserRouter>
  );
}

export default App;
