import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Containers/Login";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Navbar>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" exact component={Login} />
            <Route component={NoMatch} />
          </Switch>
        </Navbar>
      </div>
    </Router>
  )
}

export default App;
