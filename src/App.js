import React from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";

class App extends React.Component {
  render() {
    return <div>React Streaming something</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
