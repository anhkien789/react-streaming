import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Navigation from "./navigation/components/Navigation.js";
import Home from "./features/home/components/Home.js";
import Footer from "./features/footer/components/Footer.js";
import Videoplayer from "./features/videoplayer/components/Videoplayer.js";
import Phimmoi from "./features/phimmoi/components/Phimmoi.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Navigation />
        </header>
        {this.props.showPage === "Phimmoi" ? (
          <div>
            <Phimmoi />
          </div>
        ) : this.props.showPage === "Home" &&
          this.props.showPlayer === "Sintel" ? (
          <div>
            <Videoplayer />
          </div>
        ) : (
          <div>
            <Home />
          </div>
        )}
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
  return {
    showPage: state.NavigationReducer.showPage,
    showPlayer: state.HomeReducer.showPlayer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
