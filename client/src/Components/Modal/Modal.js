import React, { Component } from "react";
import { Modal, ButtonToolbar } from "react-bootstrap";
import {MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter} from "mdbreact";
import Email from "../Form/Form";
import "./Modal.css";

// class MyVerticallyCenteredModal extends Component {
//     render() {
//       return (
//         <Modal
//           {...this.props}
//           size="lg"
//           aria-labelledby="contained-modal-title-vcenter"
//           centered
//         >
//           <Modal.Header closeButton>
//             <Modal.Title id="contained-modal-title-vcenter">
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//           <Email/>

//           </Modal.Body>
//           <Modal.Footer>

//           </Modal.Footer>
//         </Modal>
//       );
//     }
//   }
  
//   class LogIn extends Component {
//     constructor(...args) {
//       super(...args);
  
//       this.state = { modalShow: false };
//     }
  
//     render() {
//       let modalClose = () => this.setState({ modalShow: false });
  
//       return (
//         <ButtonToolbar>
//           <MDBBtn color="light-blue"
//             onClick={() => this.setState({ modalShow: true })}
//           >
//             Sign In
//           </MDBBtn>
  
//           <MyVerticallyCenteredModal
//             show={this.state.modalShow}
//             onHide={modalClose}
//           />
//         </ButtonToolbar>
//       );
//     }
//   }
  
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
          <MDBBtn color="primary" onClick={this.toggle(14)}>Sign In</MDBBtn>
          <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
            <MDBModalHeader toggle={this.toggle(14)}>MDBModal title</MDBModalHeader>
            <MDBModalBody>
                    <Email/>
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