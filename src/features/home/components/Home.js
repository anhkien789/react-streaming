import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Home extends React.Component {
  render() {
    return <div>This is Home Page</div>;
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
