/**
 * Day 3 
 * A Percent layout demo
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
import Css from '../style/css';

var styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    height: 60,
  },
  sixtyPercentDimen: {
    width: Dimensions.get('window').width * 0.6,
    height: 60,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#2ecc71',
    fontSize: 18,
    lineHeight: 45,
  },
  fortyPercentDimen: {
    width: Dimensions.get('window').width * 0.4,
    height: 60,
    backgroundColor: '#27ae60',
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    lineHeight: 45,
  },
  sixtyPercentFlex: {
    flex: .6,
    height: 60,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#e74c3c',
    fontSize: 18,
    lineHeight: 45,
  },
  fortyPercentFlex: {
    flex: .4,
    height: 60,
    backgroundColor: '#c0392b',
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    lineHeight: 45,
  },
  tfCols: {
    flex: 1,
    height: 60,
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    lineHeight: 45,
  },
});

export default class Percent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style ={Css.container}>
        <Text style={Css.listLable}>use Dimensions</Text>

        <View style={styles.list}>
          <Text style={styles.sixtyPercentDimen}>60%</Text>
          <Text style={styles.fortyPercentDimen}>40%</Text>
        </View>
        <Text style={Css.listLable}>use Flex</Text>
        <View style={styles.list}>
          <Text style={styles.sixtyPercentFlex}>60%</Text>
          <Text style={styles.fortyPercentFlex}>40%</Text>
        </View>

        <Text style={Css.listLable}>use Flex</Text>
        <View style={styles.list}>
          <Text style={[styles.tfCols, { backgroundColor: '#34495e' }]}>25%</Text>
          <Text style={[styles.tfCols, { backgroundColor: '#34495e' }]}>25%</Text>
          <Text style={[styles.tfCols, { backgroundColor: '#95a5a6' }]}>25%</Text>
          <Text style={[styles.tfCols, { backgroundColor: '#95a5a6' }]}>25%</Text>
        </View>
      </View>
    );
  }
}