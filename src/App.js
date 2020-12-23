import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Navigation from "./navigation/components/Navigation.js";
import Home from "./features/home/components/Home.js";
import Footer from "./features/footer/components/Footer.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Navigation />
        </header>
        <div>
          <Home />
        </div>
        <footer>
          <Footer />
        </footer>
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
