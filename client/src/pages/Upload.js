import React, { Component } from 'react'
class Upload extends Component {
  render() {
    const { params } = this.props.match
    return (
      <div>
       
        <p>{params.id}</p>
      </div>
    )
  }
}
export default Upload