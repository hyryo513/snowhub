import React, { Component } from "react";
import { Form } from "react-bootstrap";
import GoogleLogin from 'react-google-login';
import { MDBInput, MDBContainer, MDBRow, MDBCol,MDBCardHeader, MDBCardBody,MDBCard, MDBIcon } from 'mdbreact';
import "./Form.css";
class Email extends Component {
state = {
  radio: 2
}
  onClick = nr => () => {
    this.setState({
      radio: nr
    });
  }
    render() {
      const responseGoogle = (response) => {
        console.log(response);
      }

        return (

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
      <MDBInput onClick={this.onClick(1)} checked={this.state.radio===1 ? true : false} label="Instructor" type="radio"
        id="radio1" />
      <MDBInput onClick={this.onClick(2)} checked={this.state.radio===2 ? true : false} label="Normal User" type="radio"
        id="radio1" />
        <GoogleLogin
        clientId="306631194753-3h405u0u64t43f1vd6dh5udkt0b85cb2.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
                    </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
        </Form>);
    }
}

export default Email;