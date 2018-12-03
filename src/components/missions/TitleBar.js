import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native';
import { colors, fonts } from '../../theme';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TitleBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container} >
        <TouchableOpacity style={{ marginTop: 8 }}>
          <Icon color={colors.main.dark} name='align-justify' size={30} />
        </TouchableOpacity>
        <Image style={{ width: 120, height: 30 }} source={require('../../img/icon.png')} ></Image>
        <TouchableOpacity style={{ marginTop: 8 }}>
          <Icon color={colors.main.dark} name='refresh' size={30} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 66,
    padding: 8,
    backgroundColor: colors.main.light,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: colors.main.lightGray,
    borderBottomWidth: 5,
  },
});
