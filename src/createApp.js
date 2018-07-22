import React, { Component } from "react";
import { render, hydrate } from "react-dom";
import { Provider } from "react-redux";

import { createStore } from "kunafa-client";
import RKunafa from "./RKunafa";

import startDbSync from "./startDbSync";

import deviceInfo from "./deviceInfo";
import cacheStore from "./cacheStore";

import * as selectors from "./selectors";
import middlewares from "./middlewares";
import actionCreators from "./actionCreators";

class App extends Component {
  render() {
    const Main = this.props.main;
    return (
      <Provider store={this.props.store}>
        <Main />
      </Provider>
    );
  }
}

export default (name, MAIN, appConfig) => {
  //startDbSync(appConfig.HOST, appConfig.SSL);

  const profileId = RKunafa.getProfileId();

  const config = {
    profileId,
    getLocalDbUrl: profileId => {
      return profileId || "anonymous";
    },
    deviceInfo,
    cacheStore,
    isConnected: async () => {
      return await navigator.onLine;
    },
    startDbSync: () => startDbSync(appConfig.HOST, appConfig.SSL),
    ...appConfig,
    actionCreators: {
      ...appConfig.actionCreators,
      ...actionCreators
    },
    selectors: {
      ...appConfig.selectors,
      ...selectors
    },
    middlewares: appConfig.middlewares
      ? [...appConfig.middlewares, ...middlewares]
      : middlewares
  };

  if (window.__PRELOADED_STATE__) {
    const preloadedState = window.__PRELOADED_STATE__;

    // Allow the passed state to be garbage-collected
    delete window.__PRELOADED_STATE__;
    const AppStore = createStore(config, preloadedState);

    hydrate(
      <App store={AppStore} main={MAIN} />,
      document.getElementById("root")
    );
    if (profileId) {
      AppStore.dispatch(
        AppStore.actions.fetchDoc({
          _id: profileId
        })
      );
      AppStore.dispatch({
        type: "LOGIN",
        profileId: profileId
      });
    }
  } else {
    const AppStore = createStore(config);
    render(
      <App store={AppStore} main={MAIN} />,
      document.getElementById("root")
    );
  }
};
