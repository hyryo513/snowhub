import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarPage from "./Components/Navbar/Navbar";
import Upload from './pages/Upload';
import Header from "./Components/Header/Header";
import LogIn from "./Components/Modal/Modal";
class App extends Component {
  
  render() {
    return (
       <Router>
        <div className="App">
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/upload" component={Upload} />

        </Switch>
      </div>
      <Header>
       </Header>
       <LogIn>
       </LogIn>
      </Router>
  
    );
  }
}
export default App;
