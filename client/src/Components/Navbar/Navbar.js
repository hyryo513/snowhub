import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
         <a class="navbar-brand scale-in-center"> <i class="fas fa-snowboarding rotate-center"></i></a>
          <li className=""><a href="/home">Snowhub</a></li>
          <li className="">Upload    {this.props.upload}  <a href="/login">Sign Out</a></li>
      </nav>
    );
  }
}

export default Navbar;