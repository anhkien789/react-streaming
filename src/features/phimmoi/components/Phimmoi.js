import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Phimmoi extends React.Component {
  render() {
    return <div>This is Phimmoi page</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

// Call state from HistoryReducer
const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Phimmoi);
