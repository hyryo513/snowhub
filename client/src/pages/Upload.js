import React, { Component } from 'react'
import {Jumbotron} from "react-bootstrap";
import "./upload.css";
class Upload extends Component {
  render() {
    return (
  
       <Jumbotron className="uploader">
      <div className="input-group">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroupFileAddon01">
      Upload
    </span>
  </div>
  <div className="custom-file">
    <input
      type="file"
      className="custom-file-input"
      id="inputGroupFile01"
      aria-describedby="inputGroupFileAddon01"
    />
    <label className="custom-file-label" htmlFor="inputGroupFile01">
      insert your url 
    </label>
  </div>
</div>
       </Jumbotron>
    );
  }
}
export default Upload