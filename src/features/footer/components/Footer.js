import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Footer extends React.Component {
  render() {
    return (
      <nav>
        <div className="container">
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
            <li>
              <a href="#phimhanhdong">Phim Hành Động</a>
            </li>
            <li>
              <a href="#phimkiemhiep">Phim Kiếm Hiệp</a>
            </li>
          </ul>
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
