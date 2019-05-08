import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
         
          <li className=""><a href>Clicky Game</a></li>
          <li className="">Click an image to begin!</li>
          <li className="">Score:    {this.props.score} | Top Score: {this.props.score}</li>
      </nav>
    );
  }
}

export default Navbar;