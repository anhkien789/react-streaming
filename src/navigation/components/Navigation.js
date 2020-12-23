import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import logo from "../../images/LOGO_ADT.png";

import * as Action from "../actions/NavigationAction.js";
import * as HomeAction from "../../features/home/actions/HomeAction.js";

class Navigation extends React.Component {
  handleChangeHome(e) {
    this.props.showPage("Home");

    this.props.resetPlayer();
  }

  handleChangePhimmoi(e) {
    this.props.showPage("Phimmoi");
    this.props.resetPlayer();
  }

  render() {
    return (
      <nav>
        <div className="container">
          <div className="nav-flex">
            <div className="branding">
              <a onClick={this.handleChangeHome.bind(this)} href="#home">
                <img className="logo" src={logo} alt="logo" />
              </a>
            </div>
            <ul>
              <li>
                <a
                  onClick={this.handleChangePhimmoi.bind(this)}
                  href="#phimmoi"
                >
                  Phim Mới
                </a>
              </li>
              <li>
                <a href="#theloai">Thể loại</a>
              </li>
              <li>
                <a href="#quocgia">Quốc Gia</a>
              </li>
              <li>
                <a href="#phimle">Phim Lẻ</a>
              </li>
              <li>
                <a href="#phimbo">Phim Bộ</a>
              </li>
              <li>
                <a href="#phimchieurap">Phim Chiếu Rạp</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      showPage: Action.showPage,
      resetPlayer: HomeAction.resetPlayer,
    },
    dispatch
  );
}

// Call state from HistoryReducer
const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
