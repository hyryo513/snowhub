import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css";

const Footer = () => (
  <div>
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
                <MDBCol md="12">
                    <h5 className="About">About</h5>
                    <p className="paragraphs">
                        SnowHub is a platform connecting snow lovers with instructors to review and comment on their ski/snowboard videos via Youtube. 
                    </p>
                    <p>
                        SnowHub only has read-only access to users' YouTube videos and only stores the public video IDs for service purpose.
                    </p>
                    <p className="paragraphs">
                        Please refer to the 
                        <a href="https://www.termsfeed.com/terms-service/e3d176f3e832ea8775d01253dd290773" target="_blank"> Terms of Service </a>
                         and 
                        <a href="https://www.termsfeed.com/privacy-policy/a398f94bb6129a8c09f6eeb9623361fc" target="_blank" rel="noopener noreferrer"> Privacy Policies </a>
                         for further details. Please 
                        <a href="henry.heyi513@gmail.com" target="_blank"> Contact Us </a> with any questions.
                    </p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="https://www.snowhub.org" rel="noopener noreferrer"> SnowHub.org </a>
            </MDBContainer>
        </div>
    </MDBFooter>
  </div>
);
export default Footer;