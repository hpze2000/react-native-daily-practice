/**
 * Day 1 
 * A Button Component
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
import {CloseIcon, SearchIcon} from '../style/icon';

let styles = StyleSheet.create({
  list: {
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  btn: {
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  btnPrimary: {
    backgroundColor: '#2ecc71',
  },
  btnPrimaryText: {
    color: '#fff',
  },
  buttonPrimary: {
    backgroundColor: '#2ecc71',
    color: '#fff',
  },
  buttonDanger: {
    backgroundColor: '#e74c3c',
    color: '#fff',
  },
  buttonWarn: {
    backgroundColor: '#e67e22',
    color: '#fff',
  }
});

export default class ButtonComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style ={Css.container}>
        <Text style={Css.listLable}>使用 TouchableHighlight 实现Button</Text>

        <View style={styles.list}>
          <TouchableHighlight style={styles.btn}>
            <Text>This is a button</Text>
          </TouchableHighlight>
          <TouchableHighlight activeOpacity={0.8} style={[styles.btn, styles.btnPrimary]}>
            <Text style={styles.btnPrimaryText}>This is a button</Text>
          </TouchableHighlight>
        </View>
        <Text style={Css.listLable}>使用 Button 组件 </Text>
        <View style={styles.list}>
          <Button style={styles.btn}>This is a button</Button>
          <Button style={[styles.btn, styles.buttonPrimary]}>This is a button</Button>
        </View>
        <View style={styles.list}>
          <Button style={[styles.btn, styles.buttonDanger]}>This is a button</Button>
          <Button style={[styles.btn, styles.buttonWarn]}>This is a button</Button>
        </View>

        <Text style={Css.listLable}>Icon Button</Text>
        <View style={styles.list}>
          <Button containerStyle={[styles.btn, styles.btnPrimary]}>
            <CloseIcon></CloseIcon>
            <Text style={{ color: '#fff' }}>Close</Text>
          </Button>
          <Button containerStyle={[styles.btn]}>
            <SearchIcon></SearchIcon>
            <Text>Search</Text>
          </Button>
        </View>

      </View>
    );
  }
}