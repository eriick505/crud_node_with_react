import { Redirect, Route } from "react-router-dom";
import useLogin from "Hooks/useLogin";

function ProtectedRouter(props: any) {
  const { login } = useLogin();

  if (login) return <Route {...props} />;
  if (!login) return <Redirect to="/login" />;
  return null;
}

export default ProtectedRouter;
