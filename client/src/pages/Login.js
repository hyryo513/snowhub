import React, { Component } from "react";
import Button from "react-bootstrap/Form";
import {Form, FormGroup,ControlLabel} from "react-bootstrap";
import NavbarPage from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import Email from "../Components/Form/Form";
import LogIn from "../Components/Modal/Modal";
import "./Login.css";



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }


  render() {
    return (
      <div>
      <Header>

        </Header>
      
</div>
    );
  }
}
export default Login; 