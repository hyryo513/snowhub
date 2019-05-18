import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarPage from "./Components/Navbar/Navbar";
import Upload from './pages/Upload';
import Home from './Components/Homepage/Home';
class App extends Component {
  
  render() {
    return (
       <Router>
        <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/upload" component={Upload} />
        </Switch>
      </div>
      </Router>
  
    );
  }
}
export default App;
