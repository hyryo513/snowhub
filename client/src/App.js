import React, {Component} from "react";
import { Modal, Button, ButtonToolbar, Form } from "react-bootstrap";
import GoogleLogin from 'react-google-login';
import { MDBInput, MDBContainer, MDBRow, MDBCol,MDBCardHeader, MDBCardBody,MDBCard, MDBIcon } from 'mdbreact';
import Header from "./Components/Header/Header"
import axios from "axios";
class App extends Component {
  state ={
    signIn: false,
    role: "Normal User",
    modalShow: false,
    signInShow: true,
    radio: 1
  }
  
  radioOnClick = (nr) => {
    let selectedRole = nr === 1 ? "Normal User" : "Instructor";
    this.setState({
      radio: nr,
      role: selectedRole
    });
  }

  signInClick = () => {
    if (this.state.modalShow) {
      this.setState({ modalShow: false })
    }
    else {
      this.setState({ modalShow: true })
    }
  }

  responseGoogle = (response) => {
    let idToken = response.tokenObj.id_token;

    axios.post("/api/tokensignin", {
        idToken: idToken,
        role: this.state.role
      })
      .then(
        (res) => {
          if (res) {
            this.setState({
              signIn: true,
              modalShow: false,
              signInShow: false
            })
          }
          else {
            this.setState({
              signIn: false,
              modalShow: false,
              signInShow: true
            })
          }
        }
      )
      .catch(error => {console.log(error)})
  }

  render() {
    const displaySignIn = this.state.signInShow ? {} : {display: "none"};
    
    return (
      <div>
        <Header/>
        <ButtonToolbar>
            <Button
            color="light-blue"
            onClick={this.signInClick}
            style={displaySignIn}
            >
              Sign In
            </Button>
            <Modal
            show={this.state.modalShow}
            onHide={this.signInClick}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <MDBContainer className="mt-5">
                  <MDBRow>
                    <MDBCol md="6">
                      <MDBCard>
                        <MDBCardBody>
                          <MDBCardHeader className="form-header deep-blue-gradient rounded">
                            <h3 className="my-3">
                              <MDBIcon icon="lock" /> Select your User type
                            </h3>
                          </MDBCardHeader>
                          <MDBInput onClick={() => this.radioOnClick(1)} checked={this.state.radio===1 ? true : false} label="Normal User" type="radio"
                            id="radio1" />
                          <MDBInput onClick={() => this.radioOnClick(2)} checked={this.state.radio===2 ? true : false} label="Instructor" type="radio"
                            id="radio1" />
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <GoogleLogin
                  clientId="306631194753-3h405u0u64t43f1vd6dh5udkt0b85cb2.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                  buttonText="LOGIN WITH GOOGLE"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                />
              </Form>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
            </Modal>
        </ButtonToolbar>
      </div>
    );
  }
}
export default App;