import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import PouchDB from 'pouchdb';
PouchDB.plugin(require('pouchdb-find'));

import createStore from './createStore';

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

 const AppStore = createStore(appConfig);
 setTimeout(() => {
  appConfig.initialFetch(AppStore);
 }, 500);

 render(
  <App store={AppStore} main={MAIN}/>, document.getElementById('root'));
}
