import React, { Component } from "react";
import ReactDOMServer from "react-dom/server";
import { Provider } from "react-redux";

import { createStore } from "kunafa-client";

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
  const config = {
    getLocalDbUrl: profileId => {
      return profileId || "anonymous";
    },
    ssr: true,
    ...appConfig,
    actionCreators: {
      ...appConfig.actionCreators,
      ...actionCreators
    },
    selectors: {
      ...appConfig.selectors,
      ...selectors
    },
    middlewares: [...appConfig.middlewares, ...middlewares]
  };

  const AppStore = createStore(config);

  return {
    getHtml: () =>
      ReactDOMServer.renderToString(<App store={AppStore} main={MAIN} />),
    store: AppStore
  };
};
