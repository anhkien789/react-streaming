import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import videojs from "video.js";
import "video.js/dist/video-js.css";
// import "videojs-contrib-hls/dist/videojs-contrib-hls.js";

const videoJsOptions = {
  autoplay: false,
  controls: true,
  sources: [
    {
      src: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
      type: "application/x-mpegURL",
    },
  ],
};

class Videoplayer extends React.Component {
  componentDidMount() {
    this.player = videojs(
      this.videoNode,
      videoJsOptions,
      function onPlayerReady() {
        console.log("onPlayerReady", this);
      }
    );
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    return (
      <div className="container">
        <div className="settings">
          <div data-vjs-player>
            <video
              width={1000}
              height={500}
              ref={(node) => (this.videoNode = node)}
              className="video-js vjs-default-skin"
            ></video>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

// Call state from HistoryReducer
const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Videoplayer);
