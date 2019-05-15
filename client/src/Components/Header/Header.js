import React, {Component} from "react";
import { Jumbotron } from "react-bootstrap";
import LogIn from "../Modal/Modal";
import "./Header.css";

const Header = () => (
	<Jumbotron className = "header">
		<h1>Welcome to Snowhub!</h1>
<LogIn className="btn-primary">

</LogIn>
	</Jumbotron>
);
export default Header;