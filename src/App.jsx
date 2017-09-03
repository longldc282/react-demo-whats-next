import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import Events from './scenes/Events';
import mockData from './mock/events.json';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__header">
          <h2 className="text-center">What's Next</h2>
        </div>
        <div className="App__content">
          <Events events={mockData.events} />
        </div>
      </div>
    );
  }
}

export default App;
