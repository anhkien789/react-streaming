import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import videojs from "video.js";
import "video.js/dist/video-js.css";
// import "videojs-contrib-hls/dist/videojs-contrib-hls.js";

const videoJsOptions = {
  autoplay: false,
  controls: true,
  // aspectRatio: "2:1",
  fluid: true,
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
        <div className="settings-video">
          <div data-vjs-player>
            <video
              // style={{ width: "100%", height: "50vh" }}
              ref={(node) => (this.videoNode = node)}
              className="video-js vjs-default-skin"
            ></video>
          </div>
          <div className="settings-description">
            <h1>Sintel</h1>
            <h2>
              Nội dung Phim: Bộ phim mở màn với cảnh một cô gái có tên gọi là
              Sintel bị tấn công khi đang đi qua rìa núi trong mùa đông băng
              giá. Sau khi đánh bại kẻ đã tấn công cô và đoạt lấy cây giáo của
              hắn, cô ẩn náu trong một túp lều của một vị pháp sư. Ông hỏi cô lý
              do vì sao đến đây và cô thú nhận rằng đang tìm kiếm một con rồng,
              sau đó bộ phim chuyển sang cảnh hồi tưởng. Sintel vốn là một cô
              gái đơn côi, không gia đình...
            </h2>
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
