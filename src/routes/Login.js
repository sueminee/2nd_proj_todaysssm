import React, { Component } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import StatusBar from '../components/StatusBar';
import { fonts, colors } from '../theme';
import { textValidate } from '../modules/TextValidation';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailValidate: true,
      passwordValidate: true
    };
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
        <View style={styles.container}>
          <StatusBar backgroundColor={styles.container.backgroundColor} />
          <Image style={styles.logo} source={require('../img/icon.png')} />
          <View style={this.state.emailValidate ? styles.inputContainerTrue : styles.inputContainerFalse}>
            <Icon name="ios-mail" size={25} color={colors.main.darkGray} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="이메일"
              placeholderTextColor={colors.main.darkGray}
              keyboardType="email-address"
              onChangeText={text => this.checkValidation(text, 'email')}
              returnKeyType="done"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            {this.state.emailValidate ? null : <Text>{options.fields.email.error}</Text>}
          </View>
          <View style={this.state.passwordValidate ? styles.inputContainerTrue : styles.inputContainerFalse}>
            <Icon name="ios-key" size={25} color={colors.main.darkGray} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="비밀번호"
              placeholderTextColor={colors.main.darkGray}
              secureTextEntry={true} onChangeText={(password) => this.setState({ password })}
              onChangeText={text => this.checkValidation(text, 'password')}
              returnKeyType="done"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            {this.state.passwordValidate ? null : <Text>{options.fields.password.error}</Text>}
          </View>
          <TouchableOpacity style={styles.button} onPress={this.loginHandler}>
            <Text style={styles.btnText}>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hyper} onPress={Actions.forgotPassword}>
            <Text style={styles.hyperText}>비밀번호를 잊으셨습니까?</Text>
          </TouchableOpacity>
          <View style={styles.hyperUnderBtn}>
            <Text>회원이 아니십니까?  </Text>
            <TouchableOpacity onPress={Actions.signup}>
              <Text style={styles.hyperText}>회원가입하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  checkValidation = (text, type) => {
    const key = `${type}Validate`
    if (textValidate(text, type)) {
      this.setState({
        [key]: true,
        [type]: text
      })
    } else {
      this.setState({
        [key]: false
      })
    }
  }

  checkEmpty = () => {
    let flag = true;
    for (let key in this.state) {
      if (this.state[key] === '') {
        this.state[`${key}Validate`] = false;
        flag = false;
      }
    }
    this.forceUpdate();
    return flag;
  }

  loginHandler = async () => {
    Actions.missions();
    // const { email, password } = this.state;
    // if (this.checkEmpty()) {
    //   try {
    //     let res = await axios.post("http://admin.onul-hoi.com/code_states/couriers", {
    //       // body 형식에 맞춰서 넣으면 됨
    //     })
    //     AsyncStorage.setItem('token', res.token);
    //     Actions.missions();
    //   } catch (err) {
    //     console.warn('AsyncStorage Error: ' + err.message);
    //   }
    // }
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
  logo: {
    width: 115,
    height: 36,
    marginBottom: 30,
  },
  inputContainerTrue: {
    borderBottomColor: colors.main.midGray,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    marginTop: 20
  },
  inputContainerFalse: {
    borderBottomColor: colors.sub.red,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    marginTop: 20
  },
  inputIcon: {
    justifyContent: 'center',
    marginLeft: 10
  },
  input: {
    height: 45,
    flex: 1,
    marginLeft: 15
  },
  button: {
    alignItems: 'center',
    padding: 17,
    backgroundColor: colors.main.lightGray,
    marginTop: 40,
    borderWidth: 1,
    borderColor: colors.main.midGray,
    borderRadius: 30
  },
  btnText: {
    color: colors.main.midGray,
    fontWeight: 'bold'
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

const options = {
  fields: {
    email: {
      error: '유효한 이메일 주소를 입력해주세요'
    },
    password: {
      error: '비밀번호를 입력해주세요'
    }
  }
};
