import React, { Component } from "react";
import { Modal, Button, ButtonToolbar, Form} from "react-bootstrap";
import GoogleLogin from 'react-google-login';

import Upload from "./Components/Uploadpage/Upload";
=======
import { MDBInput, MDBContainer, MDBRow, MDBCol,MDBCardHeader, MDBCardBody,MDBCard, MDBIcon } from 'mdbreact';
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
>>>>>>> 92c1595acff1337c95d3a4be2cf2ffcf883e7fd2
import axios from "axios";
class App extends Component {
  state = {
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
    var accessToken = response.accessToken;
    var idToken = response.tokenId;
    console.log(idToken);
    axios.post("/api/tokensignin", {
<<<<<<< HEAD
      idToken: idToken,
      role: this.state.role
    })
=======
        idToken: idToken,
        role: this.state.role,
        accessToken: accessToken
      })
>>>>>>> 92c1595acff1337c95d3a4be2cf2ffcf883e7fd2
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
      .catch(error => { console.log(error) })
  }

  render() {
    const displaySignIn = this.state.signInShow ? {} : { display: "none" };
    const displayUpload = this.state.signIn && (this.state.role === "Normal User") ? {} : { display: "none" };
    return (
      <div>
        <Header/>
        <ButtonToolbar>
          <Button
            color="white"
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
                              <MDBIcon icon="lock" /> Select User type
                            </h3>
                          </MDBCardHeader>
                          <MDBInput onClick={() => this.radioOnClick(1)} checked={this.state.radio === 1 ? true : false} label="Normal User" type="radio"
                            id="radio1" />
                          <MDBInput onClick={() => this.radioOnClick(2)} checked={this.state.radio === 2 ? true : false} label="Instructor" type="radio"
                            id="radio1" />
                          <GoogleLogin
                            clientId="306631194753-3h405u0u64t43f1vd6dh5udkt0b85cb2.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                            buttonText="LOGIN WITH GOOGLE"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                          />
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
<<<<<<< HEAD
=======
                <GoogleLogin
                  clientId="306631194753-3h405u0u64t43f1vd6dh5udkt0b85cb2.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                  buttonText="LOGIN WITH GOOGLE"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                  scope="profile email https://www.googleapis.com/auth/youtube.readonly"
                /> 
                By signing in, you agree to the 
                <a href="https://www.termsfeed.com/terms-service/e3d176f3e832ea8775d01253dd290773" target="_blank">Term of Service</a> 
                and 
                <a href="https://www.termsfeed.com/privacy-policy/a398f94bb6129a8c09f6eeb9623361fc" target="_blank">Privacy Policies</a>.
>>>>>>> 92c1595acff1337c95d3a4be2cf2ffcf883e7fd2
              </Form>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal>
        </ButtonToolbar>
<<<<<<< HEAD
        <Upload style={displayUpload}>
        </Upload>
=======
        <Jumbotron className="uploader" style={displayUpload}>
          <div className="input-group">
            <div className="input-group-prepend"></div>
            <input type="text" className="form-control" placeholder="Insert your url" aria-label="Username" aria-describedby="basic-addon" />
            <button className="input-group-text" id="basic-addon">
              <i className="fa fa-plus-circle"></i>
            </button> 
          </div>
       </Jumbotron>
       <Footer/>
>>>>>>> 92c1595acff1337c95d3a4be2cf2ffcf883e7fd2
      </div>
    );
  }
}
export default App;