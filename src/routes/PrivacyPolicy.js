import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import StatusBar from '../components/StatusBar';
import PrivacyPolicy from '../components/signup/PrivacyPolicy';
import { fonts, colors } from '../theme';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={styles.container.backgroundColor} />
        <PrivacyPolicy />
        <TouchableOpacity style={styles.hyper} onPress={Actions.signup}>
          <Text style={styles.hyperText}>회원가입 화면으로 돌아가기</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.main.lightGray,
    paddingLeft: 40,
    paddingRight: 40
  },
  hyper: {
    alignItems: 'center',
    padding: 20,
  },
  hyperText: {
    color: colors.sub.blue
  }
});
