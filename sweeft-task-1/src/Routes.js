import ROUTES from "./config/routes.js";
import { Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import Quiz from "./pages/Quiz";

function Routes() {
  return (
    <Switch>
      <Route path={ROUTES.ROUTE_MAIN} exact>
        <Main />
      </Route>
      <Route path={ROUTES.ROUTE_QUIZ}>
        <Quiz />
      </Route>
      <Route>
        <div>Not Found</div>
      </Route>
    </Switch>
  );
}

export default Routes;
