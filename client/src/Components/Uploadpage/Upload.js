import React, { Component } from 'react';
import { Jumbotron } from "react-bootstrap";
import {MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter} from "mdbreact";
import LogIn from "../Modal/Modal";
import Video from "../Videodiv/Video";
import "./upload.css";
class Upload extends Component {
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
            <div>
            <Jumbotron className="uploader">
                <div className="input-group">
                <h1>Upload your videos</h1>
                <MDBContainer>
        <MDBBtn color="primary" onClick={this.toggle(14)}><i class="fa fa-upload"></i></MDBBtn>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>Choose your videos</MDBModalHeader>
          <MDBModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(14)}>Add</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
                
                </div>

            </Jumbotron>
          <Video>
        
                
            </Video>
 </div>
        );
    }
}
export default Upload