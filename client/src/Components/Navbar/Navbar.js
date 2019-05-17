import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import "./Navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import App from "../../App";
import Upload from "../../pages/Upload";
class NavbarPage extends Component {
  render() {
    return (
      //    <a class="navbar-brand scale-in-center"> <i class="fas fa-snowboarding rotate-center"></i></a>

      <Navbar bg="light" expand="lg" class="nav" fixed="top">
      <Navbar.Brand > Snowhub</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="justify-content-end">
        <Nav className="ml-auto">
          <Nav.Link to="/upload">Upload</Nav.Link>
          <Nav.Link to="/login">Login</Nav.Link>
        </Nav>
  </Navbar.Collapse>
        </Navbar>);
    
  }
}

export default NavbarPage;