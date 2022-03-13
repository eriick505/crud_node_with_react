import { useContext } from "react";
import { AuthContext } from "Contexts/Auth";

const useAuth = () => useContext(AuthContext);

export default useAuth;
