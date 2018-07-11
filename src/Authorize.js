import React, { Component } from "react";
import connect from "./connect";
const R = require("ramda");

const Authorize = ({
  children,
  allow,
  loggedIn,
  currentProfile,
  renderWhenNotAuthorized,
  renderWhenNotLoggedIn
}) => {
  if (!loggedIn) {
    return renderWhenNotLoggedIn
      ? renderWhenNotLoggedIn()
      : renderWhenNotAuthorized ? renderWhenNotAuthorized() : null;
  }
  const allowedRoles = allow || ["user"];
  const roles = currentProfile.roles
    ? ["user", ...currentProfile.roles]
    : ["user"];
  if (
    roles.includes("admin") ||
    R.intersection(allowedRoles, roles).length > 0
  ) {
    return children;
  }
  return renderWhenNotAuthorized ? renderWhenNotAuthorized() : null;
};

export default connect((state, { selectors }) => {
  return {
    loggedIn: selectors.currentUserIdSelector(state) !== undefined,
    currentProfile: selectors.currentUserProfileSelector(state)
  };
})(Authorize);
