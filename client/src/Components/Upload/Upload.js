import React, { Component } from 'react';
import {MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, 
  MDBListGroup, MDBListGroupItem, MDBRow, MDBCol} from "mdbreact";
import "./Upload.css";
import YouTube from "react-youtube";
import axios from "axios";

class Upload extends Component {
  
  state = {
        modal14: false,
        savedVideos: [],
        fetchedVideos: []
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

      loadVideos = () => {
        axios.get("/api/getVideo/" + this.props.googleid)
          .then(res =>
            this.setState({ savedVideos: res.data})
          )
          .catch(err => console.log(err));
      };

    getYoutubeVideo = ()=> {
        axios.get("/api/youtube")
          .then(
            res => {
              this.setState({
                modal14: true,
                fetchedVideos: res.data
              })
            }
          )
          .catch(error => {console.log(error)})
    };

    addVideo = (videoId) => {
      axios.post("/api/video", {
        videoId: videoId,
        userGoogleId: this.props.googleid
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

    deleteVideo = _id => {
      axios.delete("/api/video/" + _id)
      .then(
        res => {
          this.loadVideos()
        }
      )
      .catch(error => {console.log(error)})
    };

    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }

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
        <MDBBtn color="primary" onClick={this.getYoutubeVideo}><i className="fa fa-upload"></i></MDBBtn>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>Choose your videos</MDBModalHeader>
          <MDBModalBody style={{'maxHeight': 'calc(100vh - 210px)', 'overflowY': 'auto'}}>
            {
              (this.state.fetchedVideos.length !== 0) &&
              (
                <MDBListGroup>
                  {this.state.fetchedVideos.map(video => (
                    <MDBListGroupItem key={video.id.videoId}>
                      <MDBRow>
                          <h4>{video.snippet.title}</h4>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol>
                          <img src={video.snippet.thumbnails.default.url} alt=""></img>
                        </MDBCol>
                        <MDBCol>
                          <MDBBtn variant="info" type="save" size="sm" onClick={() => this.addVideo(video.id.videoId)}>
                            Add
                          </MDBBtn>
                        </MDBCol>
                      </MDBRow>
                    </MDBListGroupItem>
                  ))}
                </MDBListGroup>
                )
            }
          </MDBModalBody>
        </MDBModal>
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
                          <MDBRow>
                          <h4>Comments:</h4>
                          </MDBRow>
                          <MDBRow>
                            {
                              video.commentStatus ?  
                              <p>{video.commentSummary}</p>
                              :
                              <p>No comments yet.</p>
                            }
                          </MDBRow>
                          <MDBRow>
                            {
                              video.commentStatus ?  
                              <p>{video.commentDetails}</p>
                              :
                              null
                            }
                          </MDBRow>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                          <MDBBtn variant="info" type="delete" size="sm" onClick={() => this.deleteVideo(video._id)}>
                            Delete
                          </MDBBtn>
                      </MDBRow>
                    </MDBListGroupItem>
                  ))}
                </MDBListGroup>
                )
            }
      </MDBContainer>
 </div>
        );
    };
}
export default Upload