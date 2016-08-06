
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import Router from 'react-native-simple-router';
import Home from './src/pages/home.js';
import {BackIconWhite} from './src/style/icon';

var firstRoute = {
  name: 'Home',
  component: Home,
  hideNavigationBar: true,
  trans: true,
  noStatusBar: true
};
class reactNative extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Router firstRoute={firstRoute} 
        backButtonComponent={BackIconWhite} />
    );
  }
}


AppRegistry.registerComponent('reactNative', () => reactNative);
