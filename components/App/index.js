import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from '../Home';
import About from '../About';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home" initial={true} />
          <Scene key="about" component={About} title="About" />
        </Scene>
      </Router>
    );
  }
}
