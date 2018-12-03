import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { colors, fonts } from '../../theme';

export default class Check extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={() => this.props.setModalVisible(false)}>
        <View
          style={styles.modalPosition}>
          <View
            style={styles.modalBox}>
            <View style={styles.modalTextBox}>
              <Text
                style={styles.modalText}>
                배송을 수락하시겠습니까?
              </Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: colors.sub.red }]}
                onPress={() => {
                  this.props.setModalVisible(false);
                }}>
                <Text style={styles.modalButtonText}>취소하기</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: colors.main.light }]}
                onPress={() => {
                  this.props.setModalVisible(false);
                  Actions.delivery({
                    pickupAndDeliveries: this.props.pickupAndDeliveries,
                    coordinates: this.props.coordinates,
                  })
                }}>
                <Text style={styles.modalButtonText}>수락하기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
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