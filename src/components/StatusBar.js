import React, { Component } from 'react';
import { StyleSheet, Platform, View } from 'react-native';

export default class StatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const styles = StyleSheet.create({
      statusBar: {
        height: (Platform.OS === 'ios') ? 20 : 0,
        backgroundColor: this.props.backgroundColor,
      }
    });
    return (
      <View style={[styles.statusBar, this.props.style || {}]} />
    );
  }
}
