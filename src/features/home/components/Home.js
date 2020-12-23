import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Action from "../actions/HomeAction.js";

import sintelImage from "../../../images/Sintel_poster.jpg";
import gameOfThrones from "../../../images/Game_Of_Thrones.jpg";
import harryPotter7 from "../../../images/Harry_Potter_7.jpg";
import prisonBreak from "../../../images/Prison_Break.jpg";

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
              <img className="filmimage" src={harryPotter7} alt="Film photo" />
            </div>
            <div className="description">
              <h2>Harry Potter 7</h2>
              <h3>Năm: 2011</h3>
              <h4>Ngày ra mắt: 12/07/2011</h4>
              <h5>Thời lượng: 130 phút</h5>
              <h5>Chất lượng: Bản đẹp</h5>
              <h5>Độ phân giải: Full HD</h5>
              <h6>
                Mô tả: Chúa tể Voldemort cùng đám tay chân của hắn đang âm mưu
                tấn công Harry Potter khi cậu rời khỏi.....
              </h6>
              <button className="btn-cool">Xem ngay</button>
            </div>
          </div>
          <div className="grid-item">
            <div className="element-image">
              <img className="filmimage" src={gameOfThrones} alt="Film photo" />
            </div>
            <div className="description">
              <h2>Game of Thrones (season 1)</h2>
              <h3>Năm: 2011</h3>
              <h4>Ngày ra mắt: 17/04/2011</h4>
              <h5>Thời lượng: 55 phút/tập</h5>
              <h5>Chất lượng: Bản đẹp</h5>
              <h5>Độ phân giải: Full HD</h5>
              <h6>
                Mô tả: Game of Throne kể về bảy gia tộc chiến đấu để làm chủ
                vùng đất thần thoại Westeros. Những gia tộc.....
              </h6>
              <button className="btn-cool">Xem ngay</button>
            </div>
          </div>
          <div className="grid-item">
            <div className="element-image">
              <img className="filmimage" src={prisonBreak} alt="Film photo" />
            </div>
            <div className="description">
              <h2>Vượt ngục (phần 5)</h2>
              <h3>Năm: 2017</h3>
              <h4>Ngày ra mắt: 04/04/2017</h4>
              <h5>Thời lượng: 45 phút/tập</h5>
              <h5>Chất lượng: Bản đẹp</h5>
              <h5>Độ phân giải: Full HD</h5>
              <h6>
                Mô tả: Lincoln và Sara tái ngộ sau khi họ khám phá ra rằng
                Michael vẫn còn sống trong một nhà tù ở Yemen.
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
