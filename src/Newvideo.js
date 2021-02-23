import React, { Component } from 'react'
import YouTube from 'react-youtube';
//https://www.youtube.com/watch?v=naW9U8MiUY0
//https://youtu.be/naW9U8MiUY0
export default class Newvideo extends Component {

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
        console.log(event.targent);
      }
     
    render() {
        const opts = {
          height: '390',
          width: '640',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
          },
        };
        const {videoId} =this.props
        return <YouTube
         videoId={videoId}
          opts={opts}
           onReady={this._onReady} />;
      }
     
     
    }
