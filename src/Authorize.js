import React, { Component } from "react";
import connect from "./connect";
const R = require("ramda");

const Authorize = ({ children, allow, loggedIn, currentProfile }) => {
  if (!loggedIn || !allow) {
    return null;
  }
  const roles = currentProfile.roles || ["user"];
  if (R.intersection(allow, roles).length > 0) {
    return children;
  }
  return null;
};

export default connect((state, { selectors }) => {
  return {
    loggedIn: selectors.currentUserIdSelector(state) !== undefined,
    currentProfile: selectors.currentUserProfileSelector(state)
  };
})(Authorize);
