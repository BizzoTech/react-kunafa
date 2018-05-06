import React, { Component } from "react";
import connect from "./connect";

class StaticContent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.route !== nextProps.route) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    return this.props.children;
  }
}

export default connect((state, { selectors }) => {
  return {
    route: state.history
  };
})(StaticContent);
