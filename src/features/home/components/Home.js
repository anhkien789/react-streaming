import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Home extends React.Component {
  render() {
    return <div>This is places to show grid cards</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

// Call state from HistoryReducer
const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
