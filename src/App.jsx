import Navbar from "./components/Navbar";
import Loading from "./components/Loading";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import { Suspense, lazy } from "react";

const App = () => {
  const Home = lazy(() => import("./pages/Home"));
  const Register = lazy(() => import("./pages/Register"));
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Suspense>
  );
};

export default App;
