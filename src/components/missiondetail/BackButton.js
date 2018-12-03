import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, fonts } from '../../theme';

export default class BackButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <TouchableOpacity
        style={[
          styles.button, {
            top: Platform.OS === 'ios' ? 30 : 10,
            left: 10,
          }]}
        onPress={Actions.missions}>
        <Icon name='chevron-left' size={40} color={colors.main.midGray} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 5,
  },
})