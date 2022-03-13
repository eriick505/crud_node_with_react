import FormSignup from "Components/Form/FormSignup";
import WrapperSignInSignUp from "Components/WrapperSignInSignUp";

function PageSignUp() {
  return (
    <WrapperSignInSignUp
      heading="Cadastrar Usuário"
      textAfterForm="Já possui conta?{"
      routerTo="/login"
      textRouter="Faça o Login."
    >
      <FormSignup />
    </WrapperSignInSignUp>
  );
}

export default PageSignUp;
