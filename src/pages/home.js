'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ListView,
  ScrollView,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import Button from 'react-native-button';
import Css from '../style/css';

import PageButton from './day01_button';
import Grid from './day02_grid';
import Percent from './day03_percent';

let styles = StyleSheet.create({
  list: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    justifyContent: 'center',
    padding: 5,
    margin: 5,
    width: (Dimensions.get('window').width - 30) / 3,
    height: 110,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  thumb: {
    width: 65,
    height: 65
  },
  text: {
    fontSize: 13,
  },
  btn: {
    flex: 1,
    marginTop: 10,
    padding: 5,
    width: 70,
    backgroundColor: '#1ba1e2',
    color: '#fff',
    fontSize: 13,
    borderRadius: 2,
  },
});

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  _pressRow(title, componentname) {
    this.props.toRoute({
      name: title,
      component: componentname,
      headerStyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: '#2980b9',
      },
      data: {

      },
      titleStyle: {
        color: '#fff',
      }
    });
  }

  openButton() {
    this._pressRow('按钮', PageButton);
  }

  openPercent() {
    this._pressRow('百分比', Percent);
  }

  openGrid() {
    this._pressRow('Grid列表', Grid);
  }

  render() {
    return (
      <View style ={Css.container}>
        <View style={Css.navbar}>
          <Text style={Css.navbarText} numberOfLines={1}>
            React Native Daily Practice
          </Text>
        </View>

        <ScrollView style={[Css.main, { backgroundColor: '#fff' }]}>
          <View style={styles.list}>
            <View style={styles.row}>
              <Image style={styles.thumb} source={require('../asset/button-ios.png') } />
              <Text numberOfLines={1} style={styles.text}>Button 按钮</Text>
              <Button onPress={this.openButton.bind(this) } numberOfLines={1} style={styles.btn}>
                打开
              </Button>
            </View>
            <View style={styles.row}>
              <Image style={styles.thumb} source={require('../asset/book-list.png') } />
              <Text numberOfLines={1} style={styles.text}>Grid 列表</Text>
              <Button onPress={this.openGrid.bind(this)} numberOfLines={1} style={styles.btn}>
                打开
              </Button>
            </View>
            <View style={styles.row}>
              <Image style={styles.thumb} source={require('../asset/percent-ios.png') } />
              <Text numberOfLines={1} style={styles.text}>百分比</Text>
              <Button onPress={this.openPercent.bind(this) } numberOfLines={1} style={styles.btn}>
                打开
              </Button>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

