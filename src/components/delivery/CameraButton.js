import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { colors, fonts } from '../../theme';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';

export default class CameraButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null,
      currentTime: null
    };
  }


  selectPhotoTapped = () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        return;
      }
      else if (response.error) {
        Alert.alert('오류가 발생했습니다 다시 시도해주세요', response.error);
      } else {
        let source = { uri: response.uri };
        // 카메라 찍고, 서버로 보낼코드짜야함.
        this.setState({
          avatarSource: source,
          currentTime: new Date()
        });
        this.postImageHandler();
      }
    });
  }

  postImageHandler = () => {
    // const { avatarSource, currentTime } = this.state;
    // axios.post("http://banana.com", {
    //   data: {
    //     image: avatarSource,
    //     currentTime: currentTime
    //   }
    // })
    // .then((response) => {
    //   console.log("success")
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.selectPhotoTapped}>
          <Icon name="ios-camera" size={50} color={colors.main.darkGray} style={{ textAlign: 'center' }}>
            <Text style={styles.text}>{"\n"}부재시 촬영</Text>
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
  },
})