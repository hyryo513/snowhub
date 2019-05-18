import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Upload from '../../pages/Upload';
import Header from "../Header/Header";
import LogIn from "../Modal/Modal";
class Home extends Component {
  
  render() {
    return (
        <div className="Home">
      
      <Header>
       </Header>
       <LogIn>
       </LogIn>
       </div>
  
    );
  }
}
export default Home;