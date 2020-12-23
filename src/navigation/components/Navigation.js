import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import logo from "../../images/LOGO_ADT.png";

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <div className="container">
          <div className="nav-flex">
            <div className="branding">
              <img className="logo" src={logo} alt="logo" />
            </div>
            <ul>
              <li>
                <a href="#jumbotron">Jumbotron</a>
              </li>
              <li>
                <a href="#typography">Typography</a>
              </li>
              <li>
                <a href="#buttons">Buttons</a>
              </li>
              <li>
                <a href="#lists">Lists</a>
              </li>
              <li>
                <a href="#media">Media</a>
              </li>
              <li>
                <a href="#tables">Tables</a>
              </li>
            </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
