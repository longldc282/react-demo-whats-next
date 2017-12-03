import React, { Component } from 'react';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import Layout from './layout';
import Router from './setup/router';
import store from './setup/store';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router Layout= {Layout} />
      </Provider>
    )
  }
}

export default App;
