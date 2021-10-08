import { LoginContext } from "Contexts/Login";
import { useContext } from "react";

const useLogin = () => useContext(LoginContext);

export default useLogin;
