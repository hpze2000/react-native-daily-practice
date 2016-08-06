'use strict';

import React, { Component } from 'react';

import { TouchableHighlight, View, Text, Image, StyleSheet, PropTypes } from 'react-native';

let styles = StyleSheet.create({
  icon: {
    width: 21,
    height: 21,
  },
  wrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueIcon: {
    backgroundColor: '#3498db',
    borderRadius: 10.5,
  },
  imageBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  }
});

class Icons extends Component {
  constructor(props) {
    super(props);

    this.press = this.press.bind(this);
  }

  press() {
    if (typeof this.props.press == 'function') {
      this.props.press();
    } else {
      // TODO
    }
  }

  _renderIcon() {
    return (
      <Image source={require('../asset/Delete-48.png') } style={styles.icon} />
    );
  }

  render() {
    return (
      <TouchableHighlight style={styles.wrap} underlayColor="transparent" onPress={this.press}>
        {this._renderIcon() }
      </TouchableHighlight>
    );
  }

}

class CloseIcon extends Icons {
  _renderIcon() {
    return (
      <Image source={require('../asset/Delete-48.png') } style={styles.icon} />
    );
  }
}

class SearchIcon extends Icons {
  _renderIcon() {
    return (
      <Image source={require('../asset/Search-50.png') } style={styles.icon} />
    );
  }
}
class FilterIcon extends Icons {
  _renderIcon() {
    return (
      <Image source={require('../asset/filter.png') } style={styles.icon} />
    );
  }
}

class CheckmarkIcon extends Icons {
  _renderIcon() {
    return (
      <Image source={require('../asset/checkmark.png') } style={[styles.icon, styles.blueIcon]} />
    );
  }
}

class CheckmarkIcon2 extends Icons {
  _renderIcon() {
    return (
      <Image source={require('../asset/checkmark.png') } style={[styles.icon]} />
    );
  }
}

class BackIcon extends Icons {
  _renderIcon() {
    return (
      <Image source={require('../asset/Back-50.png') } style={[styles.icon]} />
    );
  }
}

class BackIconWhite extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <View style={styles.imageBtn}>
        <Image source={require('../asset/Back-white-50.png') } style={[styles.icon, { marginRight: 5, marginLeft: 5, width: 16 }]} />
        <Text style={{ fontSize: 14, color: '#fff', marginTop: 4 }}>返回</Text>
      </View>
    );
  }
}

class GiftIcon extends Icons {
  _renderIcon() {
    return (
      <Image source={require('../asset/gift-48.png') } style={[styles.icon]} />
    );
  }
}
class IdeaIcon extends Icons {
  _renderIcon() {
    return (
      <Image source={require('../asset/Idea-64.png') } style={[styles.icon]} />
    );
  }
}
class UserIcon extends Icons {
  _renderIcon() {
    return (
      <Image source={require('../asset/Contacts-50.png') } style={[styles.icon, { width: 16, height: 16, opacity: .7 }]} />
    );
  }
}

class HomeIcon extends Icons {
  _renderIcon() {
    return (
      <Image source={require('../asset/home.png') } style={[styles.icon, { width: 16, height: 16, opacity: .7 }]} />
    );
  }
}

class SmileIcon extends Icons {
  _renderIcon() {
    return (
      <Image source={require('../asset/smile.png') } style={[styles.icon, { width: 16, height: 16, opacity: .7 }]} />
    );
  }
}

class TimeIcon extends Icons {
  _renderIcon() {
    return (
      <Image source={require('../asset/time.png') } style={[styles.icon, { width: 16, height: 16, opacity: .7 }]} />
    );
  }
}

class ReportIcon extends Icons {
  _renderIcon() {
    return (
      <Image source={require('../asset/report.png') } style={[styles.icon, { width: 16, height: 16, opacity: .7 }]} />
    );
  }
}

class CommemtIcon extends Icons {
  _renderIcon() {
    return (
      <Image source={require('../asset/comemt.png') } style={[styles.icon, { width: 16, height: 16, opacity: .7 }]} />
    );
  }
}


module.exports = {
  CloseIcon,
  SearchIcon,
  FilterIcon,
  CheckmarkIcon,
  CheckmarkIcon2,
  BackIconWhite,
  BackIcon,
  GiftIcon,
  IdeaIcon,
  UserIcon,
  HomeIcon,
  SmileIcon,
  TimeIcon,
  CommemtIcon,
  ReportIcon,
};
