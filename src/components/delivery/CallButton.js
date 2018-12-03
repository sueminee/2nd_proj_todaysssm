import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { colors, fonts } from '../../theme';
import call from 'react-native-phone-call';
import Icon from 'react-native-vector-icons/Ionicons';

export default class CallButton extends Component {
  render() {
    let phone = this.props.delivery.phone;
    const phoneCall = {
      number: phone,
      prompt: false
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { call(phoneCall) }} // 버튼 클릭할때 전화.
        >
          <Icon name="ios-call" size={50} color={colors.main.darkGray} style={{ textAlign: 'center' }}>
            <Text style={styles.text}>{"\n"}{this.props.delivery.name}</Text>
          </Icon>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    fontSize: 20,
    color: colors.main.darkGray,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})