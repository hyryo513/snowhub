import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarPage from "./Components/Navbar/Navbar";
import Upload from './pages/Upload';
import Login from "./pages/Login";
class App extends Component {
  render() {
    return (
       <Router>
        <div className="App">
      <NavbarPage/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/upload" component={Upload} />
        <Route exact path="/login" component={Login} />
        </Switch>
      </div>
      </Router>
    );
  }
}
export default App;
