import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import StatusBar from '../components/StatusBar';
import { fonts, colors } from '../theme';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={styles.container.backgroundColor} />
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 30, textAlign: 'center' }}>오류</Text>
          <Text style={{ fontSize: 14, marginTop: 30, textAlign: 'center' }}>앗...! 이메일을 잘못 입력하셨거나 등록되어있지 않은 이메일입니다.</Text>
          <Text style={{ marginTop: 40, textAlign: 'center' }}>{this.props.email}</Text>
          <Icon name="ios-information" size={60} color={colors.main.midGray} />
        </View>
        <TouchableOpacity style={styles.hyper} onPress={Actions.login}>
          <Text style={styles.hyperText}>로그인 화면으로 돌아가기</Text>
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
    paddingLeft: 60,
    paddingRight: 60
  },
  hyperUnderBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  hyper: {
    alignItems: 'center',
    padding: 20,
  },
  hyperText: {
    color: colors.sub.blue
  }
});
