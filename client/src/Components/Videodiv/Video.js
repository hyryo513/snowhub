import React, { Component } from 'react'
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBView, MDBBtn } from "mdbreact";
import ReactPlayer from 'react-player'

class Video extends Component {
    state = {
        url: null,
        pip: false,
        playing: true,
        controls: false,
        light: false,
        volume: 0.8,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
        loop: false
      }
      load = url => {
        this.setState({
          url,
          played: 0,
          loaded: 0,
          pip: false
        })
      }
    render() {
        const { url, playing, controls, light, volume, muted, loop, playbackRate, pip } = this.state
        return (
<MDBCard className="my-5 px-5 pb-5">
    <MDBCardBody>
        <MDBRow>
            <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <ReactPlayer
              ref={this.ref}
              className='react-player'
              width='100%'
              height='100%'
              url={url}
              pip={pip}
              playing={playing}
              controls={controls}
              light={light}
              loop={loop}
              playbackRate={playbackRate}
              volume={volume}
              muted={muted}
              onReady={() => console.log('onReady')}
              onStart={() => console.log('onStart')}
              onPlay={this.onPlay}
              onEnablePIP={this.onEnablePIP}
              onDisablePIP={this.onDisablePIP}
              onPause={this.onPause}
              onBuffer={() => console.log('onBuffer')}
              onSeek={e => console.log('onSeek', e)}
              onEnded={this.onEnded}
              onError={e => console.log('onError', e)}
              onProgress={this.onProgress}
              onDuration={this.onDuration}
            />
    
                        <MDBMask overlay="white-slight" />

                </MDBView>
            </MDBCol>
            <MDBCol lg="7">
                <h3 className="font-weight-bold mb-3 p-0">
                    <strong>Comments</strong>
                </h3>
                <p>
                    by
                        <strong>Carine Fox</strong>
                    , 05/08/2019
      </p>
                <MDBBtn color="success" size="md" className="waves-light ">
                    Read more
      </MDBBtn>
            </MDBCol>
        </MDBRow>

    </MDBCardBody>
</MDBCard>

);
}
}

export default Video