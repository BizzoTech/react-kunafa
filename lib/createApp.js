import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { createStore } from 'kunafa-client';

import deviceInfo from './deviceInfo';
import cacheStore from './cacheStore';

class App extends Component {
  render() {
    const Main = this.props.main;
    return React.createElement(
      Provider,
      { store: this.props.store },
      React.createElement(Main, null)
    );
  }
}

export default ((name, MAIN, appConfig) => {

  const config = Object.assign({}, appConfig, {
    getLocalDbUrl: profileId => {
      return profileId || "anonymous";
    },
    deviceInfo,
    cacheStore,
    isConnected: async () => {
      return await navigator.onLine;
    }
  });

  const AppStore = createStore(config);

  render(React.createElement(App, { store: AppStore, main: MAIN }), document.getElementById('root'));
});