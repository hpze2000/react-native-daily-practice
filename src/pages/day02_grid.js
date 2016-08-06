/**
 * Day 2 
 * A Grid demo
 */
'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  PropTypes,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import Button from 'react-native-button';
import Css from '../style/css';
import {IdeaIcon, UserIcon} from '../style/icon';

var styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    paddingTop: 10,
  },
  item: {
    //flex:.5,
    width: (Dimensions.get('window').width - 30) / 2,
    height: (Dimensions.get('window').width - 30) / 2 + 60,
    marginLeft: 10,
    marginBottom: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 0
    }
  },
  photo: {
    height: (Dimensions.get('window').width - 30) / 2,
    marginBottom: 10,
  },
  textView: {
    position: 'relative',
    height: 40,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',

  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#555',
  },
});

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      list: false,
    };

    this.refresh();
  }

}