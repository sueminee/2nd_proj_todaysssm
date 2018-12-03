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
          <Text style={{ fontSize: 30, textAlign: 'center' }}>비밀번호 재설정</Text>
          <Text style={{ fontSize: 14, marginTop: 30, textAlign: 'center' }}>
            해당 이메일로 비밀번호 재설정 링크가 보내졌습니다. 이메일을 확인해주세요!
            </Text>
          <Text style={{ marginTop: 40, textAlign: 'center' }}>{this.props.email}</Text>
          <Icon name="ios-mail-unread" size={60} color={colors.main.midGray} />
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
