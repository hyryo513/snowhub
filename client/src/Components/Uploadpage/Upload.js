import React, { Component } from 'react'
import {Jumbotron} from "react-bootstrap";
import "./upload.css";
class Upload extends Component {
  render() {
    return (
  
       <Jumbotron className="uploader">
        <div className="input-group">
      <div className="input-group-prepend">
      </div>
      <input type="text" className="form-control" placeholder="Insert your url" aria-label="Username" aria-describedby="basic-addon" />
      <button className="input-group-text" id="basic-addon">
      <i className="fa fa-plus-circle"></i>

      
      </button> 
    </div>
       </Jumbotron>
    );
  }
}
export default Upload