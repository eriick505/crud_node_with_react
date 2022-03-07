import { useContext } from "react";
import { AuthContext } from "Contexts/Login";

const useAuth = () => useContext(AuthContext);

export default useAuth;
