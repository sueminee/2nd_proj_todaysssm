import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { colors, fonts } from '../../theme';
import Icon from 'react-native-vector-icons/Ionicons';


export default class CompleteButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { this.props.indexIncrease(); }}
        >
          <Icon name="ios-checkmark-circle-outline" size={50} color={colors.main.dark} style={{ textAlign: 'center' }}>
            <Text style={styles.text}>{"\n"}배송 완료</Text>
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
    color: colors.main.dark,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})