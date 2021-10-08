import { Route, Switch } from "react-router-dom";

import ProtectedRouter from "Components/Helpers/ProtectedRouter";

import PageHome from "Pages/Home";
import PageLogin from "Pages/Login";
import PageSignUp from "Pages/SignUp";

function Routing() {
  return (
    <Switch>
      <ProtectedRouter path="/" exact component={PageHome} />
      <Route path="/signup" component={PageSignUp} />
      <Route path="/login" component={PageLogin} />
    </Switch>
  );
}

export default Routing;
