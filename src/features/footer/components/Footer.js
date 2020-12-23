import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Footer extends React.Component {
  render() {
    return (
      <nav>
        <div className="container">
          <div className="grid-footer">
            <div className="grid-footer-items">
              <div>
                <h3>Phim Mới</h3>
              </div>
              <ul>
                <li>
                  <a href="#phimlemoi">Phim Lẻ Mới</a>
                </li>
                <li>
                  <a href="#phimbomoi">Phim Bộ Mới</a>
                </li>
                <li>
                  <a href="#phimchieurap">Phim Chiếu Rạp</a>
                </li>
                <li>
                  <a href="#phimkinhdien">Phim Kinh Điển</a>
                </li>
                <li>
                  <a href="#phimsapchieu">Phim Sắp Chiếu</a>
                </li>
              </ul>
            </div>
            <div className="grid-footer-items">
              <div>
                <h3>Phim Lẻ</h3>
              </div>
              <ul>
                <li>
                  <a href="#phimlemoi">Phim Hành Động</a>
                </li>
                <li>
                  <a href="#phimbomoi">Phim Kiếm Hiệp</a>
                </li>
                <li>
                  <a href="#phimchieurap">Phim Kinh Dị</a>
                </li>
                <li>
                  <a href="#phimkinhdien">Phim Viễn Tưởng</a>
                </li>
                <li>
                  <a href="#phimsapchieu">Phim Hoạt Hình</a>
                </li>
              </ul>
            </div>
            <div className="grid-footer-items">
              <div>
                <h3>Phim Bộ</h3>
              </div>
              <ul>
                <li>
                  <a href="#phimlemoi">Phim Bộ Hàn Quốc</a>
                </li>
                <li>
                  <a href="#phimbomoi">Phim Bộ Trung Quốc</a>
                </li>
                <li>
                  <a href="#phimchieurap">Phim Bộ Mỹ</a>
                </li>
                <li>
                  <a href="#phimkinhdien">Phim Bộ Việt Nam</a>
                </li>
                <li>
                  <a href="#phimsapchieu">Phim Bộ Hồng Kông</a>
                </li>
              </ul>
            </div>
            <div className="grid-footer-items">
              <h3>Thông tin liên hệ:</h3>
              <h5>Email: trungkien2012dn@gmail.com</h5>
              <h5>SDT: 09123123123</h5>
            </div>
          </div>
        </div>
      </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
