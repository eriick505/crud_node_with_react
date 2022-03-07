import { Redirect, Route } from "react-router-dom";
import useAuth from "Hooks/useAuth";

function ProtectedRouter(props: any) {
  const { handleUserData } = useAuth();

  if (handleUserData.hasUserData) return <Route exact {...props} />;
  return <Redirect to="/login" />;
}

export default ProtectedRouter;
