import React, {Component} from "react";
import { Jumbotron, Button } from "react-bootstrap";
import LogIn from "../Modal/Modal";
import "./Header.css";

const Header = () => (
	<header className = "header">
		<h1>Welcome to Snowhub!</h1>
    <Button  >
			<LogIn/>
		</Button>
	</header>
);
export default Header;