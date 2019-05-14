import React, { Component } from "react";
import { Modal, Button, ButtonToolbar } from "react-bootstrap";
import Email from "../Form/Form";
import "./Modal.css";

class MyVerticallyCenteredModal extends Component {
    render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Email/>

          </Modal.Body>
          <Modal.Footer>

          </Modal.Footer>
        </Modal>
      );
    }
  }
  
  class LogIn extends React.Component {
    constructor(...args) {
      super(...args);
  
      this.state = { modalShow: false };
    }
  
    render() {
      let modalClose = () => this.setState({ modalShow: false });
  
      return (
        <ButtonToolbar>
          <Button
          color="light-blue"
            onClick={() => this.setState({ modalShow: true })}
          >
            Sign In
          </Button>
  
          <MyVerticallyCenteredModal
            show={this.state.modalShow}
            onHide={modalClose}
          />
        </ButtonToolbar>
      );
    }
  }
  
  export default LogIn;