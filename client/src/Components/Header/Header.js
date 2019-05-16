import React, {Component} from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import LogIn from "../Modal/Modal";
import "./Header.css";

const Header = () => (

	<MDBRow>
	  <MDBCol>
	<MDBJumbotron className = "header">
		<h1>Welcome to Snowhub!</h1>
	
	</MDBJumbotron>
	</MDBCol>
      </MDBRow>
  
);
export default Header;