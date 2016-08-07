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
  ListView,
  TouchableHighlight
} from 'react-native';
import Css from '../style/css';
import {IdeaIcon, UserIcon} from '../style/icon';
import LoadingSpinner from '../components/gif_spinner';

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

const data = { "errcode": 0, "data": [{ "name": "Mermaid 3D", "box": "$552,198,479", "role": "Director", "src": "http://img1.vued.vanthink.cn/vueda062af23e30cb6c783ac196b351b7cd0.jpeg" }, { "name": "Xi you xiang mo pian", "box": "$207,927,982", "role": "Director", "src": "http://img1.vued.vanthink.cn/vued1e3b845ae8ebd6b81f12ebc69a625471.jpeg" }, { "name": "Kung Fu Hustle", "box": "$102,034,104", "role": "Director/Actor", "src": "http://img1.vued.vanthink.cn/vued71b205dde2efaa97a4d31a90cd336b3b.jpeg" }, { "name": "CJ7", "box": "$102,034,104", "role": "Director/Actor", "src": "http://img1.vued.vanthink.cn/vuedbff3a5e40bbdfae0bdeb6d030ef6ec50.jpeg" }, { "name": "Shaolin Soccer", "box": "$42,776,032", "role": "Director/Actor", "src": "http://img1.vued.vanthink.cn/vuedd4f383353248019306d41c487c5d56f5.jpeg" }] }

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      list: false,
    };

    this.refresh();
  }

  refresh() {
    const _this = this;
    setTimeout(function () {
      let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      _this.setState({
        loading: false,
        list: ds.cloneWithRows(data.data)
      });
    }, 1000);
  }

  _renderRowView(rowData) {
    return (
      <View style={styles.item}>
        <Image style={styles.photo} source={{ uri: rowData.src }} />
        <View style={styles.textView}>
          <Text style={styles.name} numberOfLines={1}>{rowData.name}</Text>
        </View>
      </View>
    );
  }

  render() {
    var me = this;

    if (this.state.loading) {
      return (
        <LoadingSpinner></LoadingSpinner>
      );
    }

    return (
      <ListView style={Css.container} contentContainerStyle={styles.list}
        renderRow={this._renderRowView}
        dataSource={this.state.list}>
      </ListView>
    );
  }

}