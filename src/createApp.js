import React, {Component} from 'react';
import {render, hydrate} from 'react-dom';
import {Provider} from 'react-redux';

import {createStore} from 'kunafa-client';
import RKunafa from './RKunafa';


import deviceInfo from './deviceInfo';
import cacheStore from './cacheStore';

class App extends Component {
  render() {
    const Main = this.props.main;
    return (
      <Provider store={this.props.store}>
        <Main/>
      </Provider>
    )
  }
}

export default(name, MAIN, appConfig) => {

  const config = {
    profileId: RKunafa.getProfileId(),
    getLocalDbUrl: profileId => {
      return profileId || "anonymous";
    },
    deviceInfo,
    cacheStore,
    isConnected: async() => {
      return await navigator.onLine;
    },
    ...appConfig
  }

  if(window.__PRELOADED_STATE__){
    const preloadedState = window.__PRELOADED_STATE__

    // Allow the passed state to be garbage-collected
    delete window.__PRELOADED_STATE__
    const AppStore = createStore(config, preloadedState);
    hydrate(
      <App store={AppStore} main={MAIN}/>, document.getElementById('root'));
  }else{
    const AppStore = createStore(config);
    render(
      <App store={AppStore} main={MAIN}/>, document.getElementById('root'));
  }


}
