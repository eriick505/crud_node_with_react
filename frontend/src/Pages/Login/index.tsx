import FormSignIn from "Components/Form/FormSignIn";
import WrapperSignInSignUp from "Components/WrapperSignInSignUp";

function PageLogin() {
  return (
    <WrapperSignInSignUp
      heading="Login"
      textAfterForm="Não possui conta?"
      routerTo="/signup"
      textRouter="Criar Conta."
    >
      <FormSignIn />
    </WrapperSignInSignUp>
  );
}

export default PageLogin;
