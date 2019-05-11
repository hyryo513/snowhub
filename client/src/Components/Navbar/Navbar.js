import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
         <a class="navbar-brand scale-in-center"> <i class="fas fa-snowboarding rotate-center"></i></a>
          <li className=""><a href="">Snowhub</a></li>
          <li className="">Upload    {this.props.upload}  Sign Out {this.props.login}</li>
      </nav>
    );
  }
}

export default Navbar;