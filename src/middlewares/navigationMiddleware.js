const routeToPath = route => {
  return "/" + route.path.join("/");
};

const pathToRoute = path => {
  return {
    path: path.substr(1).split("/")
  };
};

export default (store, config) => next => {
  const path = document.location.pathname;
  const route = pathToRoute(path);
  next(config.actionCreators.goTo(route.path, route.params));
  window.addEventListener("popstate", function(event) {
    const path = document.location.pathname;
    const route = pathToRoute(path);
    next(config.actionCreators.goTo(route.path, route.params));
  });
  return action => {
    if (action.type === "NAVIGATE_TO") {
      history.pushState(action.route, "", routeToPath(action.route));
    }
    if (action.type === "GO_TO" || action.type === "TRANSITE_TO") {
      history.replaceState(action.route, "", routeToPath(action.route));
    }
    if (action.type === "RESET_HISTORY") {
      history.replaceState({}, "", "/");
    }
    return next(action);
  };
};
