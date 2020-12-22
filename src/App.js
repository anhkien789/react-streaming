import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Navigation from "./navigation/components/Navigation.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Navigation />
        </header>

        <footer></footer>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
