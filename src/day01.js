/**
 * Day 1
 * A stop watch
 */
'use strict';

import React, {Component, ListView, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

class WatchFace extends Component {
  static propTypes = {
    sectionTime: React.propTypes.string.isRequired,
    totalTime: React.propTypes.string.isRequired
  };

  render() {
    return (
      <View style={styles.watchFaceContainer}>
        <Text style={styles.sectionTime}>{this.props.sectionTime}</Text>
        <Text style={styles.totalTime}>{this.props.totalTime}</Text>
      </View>
    )
  }
}