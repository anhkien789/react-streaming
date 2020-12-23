import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import sintelImage from "../../../images/Sintel_poster.jpg";

import * as Action from "../actions/HomeAction.js";

class Home extends React.Component {
  handleXemNgay(e) {
    this.props.showPlayer("Sintel");
  }

  render() {
    return (
      <div className="container">
        <div className="grid-container">
          <div className="grid-item">
            <div className="element-image">
              <img className="filmimage" src={sintelImage} alt="Film photo" />
            </div>
            <div className="description">
              <h2>SINTEL</h2>
              <h3>Năm: 2010</h3>
              <h4>Ngày ra mắt: 27/09/2010</h4>
              <h5>Thời lượng: 14 phút 48 giây</h5>
              <h5>Chất lượng: Bản đẹp</h5>
              <h5>Độ phân giải: Full HD</h5>
              <h6>
                Mô tả: là một bộ phim hoạt hình đồ họa vi tính của Blender
                Institute, một nhánh của hãng Blender Foundation.
              </h6>
              <button
                onClick={this.handleXemNgay.bind(this)}
                className="btn-cool"
              >
                Xem ngay
              </button>
            </div>
          </div>
          <div className="grid-item">
            <div className="element-image">
              <img className="filmimage" src={sintelImage} alt="Film photo" />
            </div>
            <div className="description">
              <h2>SINTEL</h2>
              <h3>Năm: 2010</h3>
              <h4>Ngày ra mắt: 27/09/2010</h4>
              <h5>Thời lượng: 14 phút 48 giây</h5>
              <h5>Chất lượng: Bản đẹp</h5>
              <h5>Độ phân giải: Full HD</h5>
              <h6>
                Mô tả: là một bộ phim hoạt hình đồ họa vi tính của Blender
                Institute, một nhánh của hãng Blender Foundation.
              </h6>
              <button className="btn-cool">Xem ngay</button>
            </div>
          </div>
          <div className="grid-item">
            <div className="element-image">
              <img className="filmimage" src={sintelImage} alt="Film photo" />
            </div>
            <div className="description">
              <h2>SINTEL</h2>
              <h3>Năm: 2010</h3>
              <h4>Ngày ra mắt: 27/09/2010</h4>
              <h5>Thời lượng: 14 phút 48 giây</h5>
              <h5>Chất lượng: Bản đẹp</h5>
              <h5>Độ phân giải: Full HD</h5>
              <h6>
                Mô tả: là một bộ phim hoạt hình đồ họa vi tính của Blender
                Institute, một nhánh của hãng Blender Foundation.
              </h6>
              <button className="btn-cool">Xem ngay</button>
            </div>
          </div>
          <div className="grid-item">
            <div className="element-image">
              <img className="filmimage" src={sintelImage} alt="Film photo" />
            </div>
            <div className="description">
              <h2>SINTEL</h2>
              <h3>Năm: 2010</h3>
              <h4>Ngày ra mắt: 27/09/2010</h4>
              <h5>Thời lượng: 14 phút 48 giây</h5>
              <h5>Chất lượng: Bản đẹp</h5>
              <h5>Độ phân giải: Full HD</h5>
              <h6>
                Mô tả: là một bộ phim hoạt hình đồ họa vi tính của Blender
                Institute, một nhánh của hãng Blender Foundation.
              </h6>
              <button className="btn-cool">Xem ngay</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      showPlayer: Action.showPlayer,
    },
    dispatch
  );
}

// Call state from HistoryReducer
const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
