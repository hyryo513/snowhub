import React, { Component } from 'react'
import {Jumbotron} from "react-bootstrap";
class Upload extends Component {
  render() {
    const { params } = this.props.match
    return (
      <div>
       <Jumbotron>

       </Jumbotron>
        <p>{params.id}</p>
      </div>
    )
  }
}
export default Upload