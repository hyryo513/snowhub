import React, {Component} from "react";
import {Modal, ButtonToolbar, Form} from "react-bootstrap";
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import { MDBInput, MDBContainer, MDBRow, MDBCol,MDBCardHeader, MDBCardBody,MDBCard,MDBBtn, MDBIcon } from 'mdbreact';
import Upload from "../Components/Upload/Upload";
import Comment from "../Components/Comment/Comment";
import axios from "axios";
import "./Login.css"
class Login extends Component {
  state ={
    signIn: false,
    role: "Normal User",
    modalShow: false,
    signInShow: true,
    radio: 1,
    googleId: ""
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

  signOutClick = () => {
      this.setState({ 
        signIn: false,
        role: "Normal User",
        modalShow: false,
        signInShow: true,
        radio: 1,
        googleId: ""
     })
    }

  responseGoogle = (response) => {
    var code = response.code;
    //var idToken = response.tokenId;
    axios.post("/api/tokensignin", {
        code: code,
        role: this.state.role
        //accessToken: accessToken
      })
      .then(
        (res) => {
          if (res.data.result) {
            this.setState({
              signIn: true,
              modalShow: false,
              signInShow: false,
              googleId: res.data.googleId
            })

          }
          else {
            this.setState({
              signIn: false,
              modalShow: false,
              signInShow: true,
              googleId: ""
            })
          }
        }
      )
      .catch(error => {console.log(error)})
  };

  render() {
    const displaySignIn = this.state.signInShow ? {} : {display: "none"};
    const displaySignOut = this.state.signInShow ? {display: "none"} : {};
    return (
      <div>
        <ButtonToolbar>
            <MDBBtn
            color="primary"
            onClick={this.signInClick}
            style={displaySignIn}
            >
              Sign In
            </MDBBtn>
              <GoogleLogout 
              onLogoutSuccess={this.signOutClick}
              buttonText= "Sign Out"
              render={renderProps => (
                <MDBBtn
                color="primary"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                style={displaySignOut}
                >
                Sign Out
                </MDBBtn>
              )}
              />
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
            <Modal.Body className="modal-body">
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
                             <GoogleLogin
                  clientId="306631194753-3h405u0u64t43f1vd6dh5udkt0b85cb2.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                  buttonText="LOGIN WITH GOOGLE"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                  scope="profile email https://www.googleapis.com/auth/youtube.readonly"
                  accessType="offline"
                  responseType="code"
                /> 
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </Form>
            </Modal.Body>
            <Modal.Footer className="modal-footer">
           <p className="modal-footer">By signing in, you agree to the &nbsp;
                <a href="https://www.termsfeed.com/terms-service/e3d176f3e832ea8775d01253dd290773" target="_blank" rel="noopener noreferrer"> Terms of Service </a>
                &nbsp; and &nbsp;
                <a href="https://www.termsfeed.com/privacy-policy/a398f94bb6129a8c09f6eeb9623361fc" target="_blank" rel="noopener noreferrer"> Privacy Policies </a>.</p>
            </Modal.Footer>
            </Modal>
        </ButtonToolbar>
        {this.state.signIn && (this.state.role === "Normal User") && <Upload googleid={this.state.googleId} />}
        {this.state.signIn && (this.state.role === "Instructor") && <Comment googleid={this.state.googleId} />}
      </div>
    );
  }
}
export default Login;