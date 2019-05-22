import React, { Component } from 'react';
import {MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, 
  MDBListGroup, MDBListGroupItem, MDBRow, MDBCol, MDBInput} from "mdbreact";
import YouTube from "react-youtube";
import axios from "axios";

class Upload extends Component {
  
  state = {
        modal14: false,
        savedVideos: [],
        cmtVideoId: "",
        commentSummary: "",
        commentDetails: ""
      }

      componentDidMount() {
          this.loadVideos()
      };

      toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
      };

      openModal = (_id) => {
        this.setState({
          modal14: true,
          cmtVideoId: _id
        })
      };

      handleDetails = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

      handleSummary = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

      loadVideos = () => {
        axios.get("/api/comment")
          .then(res =>
            this.setState({ savedVideos: res.data})
          )
          .catch(err => console.log(err));
      };


    addComment = (event, _id) => {
      event.preventDefault();
      axios.put("/api/comment/" + _id, {
        commentSummary: this.state.commentSummary,
        commentDetails: this.state.commentDetails
      })
      .then(
        res => {
          this.setState({
            modal14: false
          })
          this.loadVideos()
        }
      )
      .catch(error => {console.log(error)})
    };

    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    };

    render() {
      const opts = {
        height: '340',
        width: '560',
        playerVars: {
          autoplay: 0
        }
      };       
        return (
            <div {...this.props}>
                
            <MDBContainer>
            {
              (this.state.savedVideos.length !== 0) &&
              (
                <MDBListGroup>
                  {this.state.savedVideos.map(video => (
                    <MDBListGroupItem key={video._id}>
                      <MDBRow>
                        <MDBCol>
                          <YouTube
                          videoId={video.videoId}
                          opts={opts}
                          onReady={this._onReady}
                        />
                        </MDBCol>
                        <MDBCol>
                          <MDBBtn variant="info" type="open" size="sm" onClick={() => this.openModal(video._id)}>
                            Add Comment
                          </MDBBtn>
                        </MDBCol>
                      </MDBRow>
                    </MDBListGroupItem>
                  ))}
                </MDBListGroup>
                )
            }
            <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>Add Your Comments</MDBModalHeader>
          <MDBModalBody>
            <MDBRow>
              <MDBInput label="Comment Summary" background name="commentSummary" onChange={this.handleSummary}/>
            </MDBRow>
            <MDBRow>
              <MDBInput type="textarea" label="Comment Details" background name="commentDetails" onChange={this.handleDetails}/> 
            </MDBRow>
            <MDBRow>
              <MDBBtn variant="info" type="submit" size="sm" onClick={(event) => this.addComment(event, this.state.cmtVideoId)}>
                Submit Comment
              </MDBBtn>
            </MDBRow>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
 </div>
        );
    };
}
export default Upload