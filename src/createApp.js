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

  const profileId = RKunafa.getProfileId();

  const config = {
    profileId,
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
    const AppStore = createStore(config, {...preloadedState, currentProfile: {
      _id: profileId
    }});
    hydrate(
      <App store={AppStore} main={MAIN}/>, document.getElementById('root'));
  }else{
    const AppStore = createStore(config);
    render(
      <App store={AppStore} main={MAIN}/>, document.getElementById('root'));
  }


}
