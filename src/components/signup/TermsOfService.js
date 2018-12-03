import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../theme';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ marginBottom: 50 }}>
        <Text style={{ fontSize: 30 }}>이용약관</Text>
        <Text style={{ fontSize: 15, marginTop: 30 }}>1조 1항</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.main.dark,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
  icon: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: colors.main.light,
    fontWeight: 'bold',
  },
})