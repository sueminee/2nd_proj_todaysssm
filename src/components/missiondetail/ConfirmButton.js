import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, fonts } from '../../theme';
import Check from './Check';

export default class ConfirmButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  setModalVisible = (bool) => {
    this.setState({ modalVisible: bool });
  }

  render() {
    return (
      <View style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'transparent' }}>
        <Check
          setModalVisible={this.setModalVisible}
          modalVisible={this.state.modalVisible}
          pickupAndDeliveries={this.props.pickupAndDeliveries}
          coordinates={this.props.coordinates} />
        <TouchableOpacity
          style={[
            styles.button, {
              bottom: 10,
              right: 10,
            }]}
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Icon name='check-circle' size={60} color={colors.main.midGray} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 5,
  },
  modalPosition: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBox: {
    width: 300,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.main.lightGray,
    borderColor: colors.main.midGray,
    borderWidth: 2,
    borderRadius: 10,
  },
  modalTextBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    fontSize: 25,
    color: colors.main.dark,
  },
  modalButton: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  modalButtonText: {
    fontSize: 18,
    color: colors.main.dark,
  }
})