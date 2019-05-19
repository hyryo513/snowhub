import React, { Component } from "react";
import { Modal, ButtonToolbar } from "react-bootstrap";
import {MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter} from "mdbreact";
//import Email from "../Form/Form";
import "./modal.css";
  
class LogIn extends Component {
  state = {
    modal14: false
  }
  
  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }
  
  render() {
    return (
        <MDBContainer>
          <MDBBtn  outline color="white" className="mb-5" onClick={this.toggle(14)}>Sign In</MDBBtn>
          <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
            <MDBModalBody>
                 
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="light-blue" onClick={this.toggle(14)}>Close</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      );
    }
  }
  export default LogIn;