import React, { Component } from 'react';
import {
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Picker, 
  ScrollView, 
  Image, 
  PixelRatio, 
  Alert, 
  AsyncStorage 
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import StatusBar from '../components/StatusBar';
import { textValidate } from '../modules/TextValidation';
import { fonts, colors } from '../theme';
import API_KEY from '../environment/API_KEY.json';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      passwordConfirm: "",
      phoneNumber: "",
      preferPlace: "",
      licenseNumber: "",
      licenseName: "",
      address: "",
      licenseImage: null,
      accountImage: null,
      profileImage: null,
      profileImageSend: null,
      profileImageValidate: true,
      licenseImageValidate: true,
      accountImageValidate: true,
      emailValidate: true,
      nameValidate: true,
      passwordValidate: true,
      passwordConfirmValidate: true,
      phoneNumberValidate: true,
      preferPlaceValidate: true,
      termsValidate: false
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar backgroundColor={styles.container.backgroundColor} />
          <TouchableOpacity style={styles.profileContainer} onPress={()=>{this.selectImageHandler("profileImage")}}>
            <View style={[styles.profileImage, styles.profileImageContainer, {marginBottom: 20}]}>
            { this.state.profileImage === null ?
              <View style={{alignItems:'center'}}>
                <Icon name="ios-camera" size={50} color={colors.main.darkGray} style={styles.inputIcon}/>
                <Text style={ this.state.profileImage ? styles.profileTextTrue: styles.profileTextFalse}>사진을 선택하세요</Text> 
              </View> :
              <Image style={styles.profileImage} source={this.state.profileImage} />
            }
            </View>
          </TouchableOpacity>
          <View style={this.state.nameValidate ? styles.inputContainerTrue : styles.inputContainerFalse}>
            <TextInput 
              style={styles.input}
              placeholder="이름" 
              onChangeText={text => this.checkValidation(text, 'name')} 
              value={this.state.name}
              returnKeyType="done"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={{marginTop: 10}}>
            {this.state.nameValidate ? null : <Text>{options.fields.name.error}</Text>}
          </View>
          <View style={this.state.passwordValidate ? styles.inputContainerTrue : styles.inputContainerFalse}>
            <TextInput
              style={styles.input} 
              placeholder="비밀번호" 
              secureTextEntry={true} 
              onChangeText={text => this.checkValidation(text, 'password')}
              returnKeyType="done"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={{marginTop: 10}}>
            {this.state.passwordValidate ? null : <Text>{options.fields.password.error[0]}</Text>}
          </View>
          <View style={this.state.passwordConfirmValidate ? styles.inputContainerTrue : styles.inputContainerFalse}>
            <TextInput 
              style={styles.input}
              placeholder="비밀번호 확인"
              secureTextEntry={true} 
              onChangeText={text => this.checkValidation(text, 'passwordConfirm')}
              returnKeyType="done"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={{marginTop: 10}}>
            {this.state.passwordConfirmValidate ? null : <Text>{options.fields.password.error[1]}</Text>}
          </View>
          <View style={this.state.emailValidate ? styles.inputContainerTrue : styles.inputContainerFalse}>
            <TextInput 
              style={styles.input} 
              placeholder="이메일" 
              onChangeText={text => this.checkValidation(text, 'email')} 
              keyboardType="email-address"
              returnKeyType="done"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={{marginTop: 10}}>
            {this.state.emailValidate ? null : <Text>{options.fields.email.error}</Text>}
          </View>
          <View style={this.state.phoneNumberValidate ? styles.inputContainerTrue : styles.inputContainerFalse}>
            <TextInput 
              style={styles.input}
              placeholder="전화번호" 
              onChangeText={text => this.checkValidation(text, 'phoneNumber')} 
              returnKeyType="done"
              keyboardType='numeric'
            />
          </View>
          <View style={{marginTop: 10}}>
            {this.state.phoneNumberValidate ? null : <Text>{options.fields.phoneNumber.error}</Text>}
          </View>
          <View style={{ marginTop: 30}}>
            <TouchableOpacity style={{ flex: 1, padding: 17, borderWidth: 1, backgroundColor: colors.main.lightGray, borderWidth: 1,  marginTop: 30, alignItems: 'center'}} onPress={()=>{this.selectImageHandler("accountImage")}}>
              <Text style={styles.btntext}>통장사본</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, padding: 17, borderWidth: 1, backgroundColor: colors.main.lightGray, borderWidth: 1,  marginTop: 30, alignItems: 'center'}} onPress={()=>{this.selectImageHandler("licenseImage")}}>
              <Text style={styles.btntext}>주민등록증</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems:"center", marginTop: 20}}>
            <Text>제품 픽업 선호 장소</Text>
          </View>
          <Picker
            style={styles.picker}
            onValueChange = {preferPlace => {this.setState({preferPlace})}}
            selectedValue={this.state.preferPlace}>
            <Picker.Item label = "남부터미널" value = "남부터미널"/>
            <Picker.Item label = "고속터미널" value = "고속터미널"/>
            <Picker.Item label = "용인시외버스터미널" value = "용인시외버스터미널"/>
          </Picker>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
            <TouchableOpacity onPress={() =>{this.setState({termsValidate: !this.state.termsValidate})}}>
              <Icon name="ios-checkbox-outline" size={30} color={this.state.termsValidate ? colors.sub.blue : colors.sub.red} style={styles.inputIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={Actions.termsOfService}>
              <Text style={[styles.hypertext, {marginLeft: 10}]}>이용약관</Text>
            </TouchableOpacity>
            <Text>과 </Text>
            <TouchableOpacity onPress={Actions.privacyPolicy}>
              <Text style={styles.hypertext}>개인정보 취급방침</Text>
            </TouchableOpacity>
            <Text>에 동의합니다.</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={this.signupHandler}>
            <Text style={styles.btntext}>회원가입</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hyper} onPress={Actions.login}>
            <Text style={styles.hypertext}>로그인 화면으로 돌아가기</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  selectImageHandler = (type) => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, async (response) => {
      if (response.didCancel) {
        return;
      } else if (response.error) {
        Alert.alert('오류가 발생했습니다 다시 시도해주세요', response.error);
      } else {
        let source = {uri: response.uri };
        let sendSource = {data: response.data};
        if (type === 'profileImage') {
          this.setState({
            profileImage: source,
            profileImageSend: sendSource
          })
          const isValid = await this.faceRecognition();
          if (isValid) {
            console.warn("프로필 설정 완료!")
          } else {
            console.warn("프로필 설정 실패!")
          }
        } else if (type === 'licenseImage') {
          this.setState({
            licenseImage: source
          });
          this.textRecognition();
        } else if (type === 'accountImage') {
          this.setState({
            accountImage: source
          });
        }
      }
    });
  }

  textRecognition = async () => {
    try {
      let res  = await axios.post(`https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`, {
        "requests": [
          {
            "image": {
              "content": `${this.state.licenseImageSend.data}`
            },
            "features": [
              {
                "type": "TEXT_DETECTION"
              }
            ]
          }
        ]
      })

      let title = res.data.responses[0].textAnnotations[1].description;
      let name = res.data.responses[0].textAnnotations[2].description;
      if (title === '주민등록증' && this.state.name === name) {
        console.warn("주민등록증 설정 완료!!!");
      } else {
        console.warn(options.fields.license.error[1]);
      }
    } catch (err) {
      console.warn(options.fields.license.error[1])
    }
  }

  faceRecognition =  async () => {
    try {
      let res = await axios.post(`https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`, {
        "requests": [
          {
            "image": {
              "content": `${this.state.profileImageSend.data}`
            },
            "features": [
              {
                "type": "FACE_DETECTION"
              }
            ]
          }
        ]
      })
      const peopleNumber = res.data.responses[0].faceAnnotations.length;
      if (peopleNumber === 1) {
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  }

  checkValidation = (text, type) => {
    const key = `${type}Validate`
    if (textValidate(text, type, this.state.password)) {
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
      if (this.state[key] === '' || this.state[key] === null) {
        this.state[`${key}Validate`] = false;
        flag = false;
      }
    }
    this.forceUpdate();
    return flag;
  }

  signupHandler = async () => {
    const { name, password, phoneNumber, email, preferPlace, profileImage, licenseImage, accountImage } = this.state;
    if (this.checkEmpty()) {
      try {
        let res = await axios.post("http://admin.onul-hoi.com/code_states/couriers", {
          "secret" : "codestates12345",
          "couriers": {
            "profile_image" : profileImage,
            "name": name,
            "password": password,
            "phone": phoneNumber,
            "email": email,
            "base_point": preferPlace,
            "id_card" : licenseImage,
            "bankbook" : accountImage
          }
        })
        await AsyncStorage.setItem('token', res.token);
        Actions.missions();
      } catch(err) {
        console.warn('AsyncStorage Error: ' + err.message);
      }
    }
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
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImageContainer: {
    marginTop: 60,
    borderColor: colors.main.midGray,
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileImage: {
    backgroundColor: colors.main.light,
    borderRadius: 70,
    width: 140,
    height: 140
  },
  profileTextTrue: {
    color: colors.main.light,
    fontSize: 11
  },
  profileTextFalse: {
    color: colors.sub.red,
    fontSize: 11
  },
  inputContainerTrue: {
    borderBottomColor: colors.main.midGray,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems:'center',
    height: 45,
    marginTop: 20
  },
  inputContainerFalse: {
    borderBottomColor: colors.sub.red,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems:'center',
    height: 45,
    marginTop: 20
  },
  input: {
    height: 45,
    flex: 1,
    marginLeft: 10
  },
  picker: {
    marginTop: 30,
    borderWidth: 1
  },
  preferPlace: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 50
  },
  preferPlaceText: {
    color: colors.main.light
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 17,
    borderWidth: 1,
    borderColor: colors.main.midGray,
    marginTop: 60
  },
  btntext: {
    color: colors.main.midGray,
    fontWeight: 'bold'
  },
  hyper: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    marginTop: 10,
    marginBottom: 60
  }, 
  hypertext: {
    color: colors.sub.blue
  }
});

const options = {
  fields: {
    name: {
      error: '성함을 입력해주세요.'
    },
    email: {
      error: '유효한 이메일 주소를 입력해주세요'
    },
    password: {
      error: ['최소한 6자리 이상을 입력해주세요.', '비밀번호가 일치하지 않습니다.']
    },
    profile: {
      error: '정확한 얼굴이 보이는 프로필 사진을 설정해주세요.'
    },
    license: {
      error: '잘못된 주민등록증입니다.'
    },
    account: {
      error: '통장사본을 설정해주세요.'
    },
    phoneNumber: {
      error: '유효한 휴대폰 번호를 입력해주세요.'
    },
    terms: {
      error: '약관에 동의해주세요.'
    }
  },
};