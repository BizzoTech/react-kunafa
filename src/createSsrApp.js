import React, {Component} from 'react';
import ReactDOMServer from 'react-dom/server';
import {Provider} from 'react-redux';

import {createStore} from 'kunafa-client';



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
    getLocalDbUrl: profileId => {
      return profileId || "anonymous";
    },
    ...appConfig
  }

  const AppStore = createStore(config);

  return ReactDOMServer.renderToString(<App store={AppStore} main={MAIN}/>);
}
