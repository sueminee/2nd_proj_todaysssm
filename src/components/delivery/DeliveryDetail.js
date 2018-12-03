import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Clipboard, Modal } from 'react-native';
import { colors, fonts } from '../../theme';


export default class DeliveryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      pageX: 0,
      pageY: 0,
    };
  }

  getTouchCoordinates = e => {
    this.setState({
      pageX: e.nativeEvent.pageX,
      pageY: e.nativeEvent.pageY,
    })
  }

  setModalVisible = (bool) => {
    this.setState({ modalVisible: bool });
  }

  copyToClipboard = async (address) => {
    await Clipboard.setString(address);
  }

  render() {
    const address = this.props.address;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={e => {
          this.copyToClipboard(address);
          this.getTouchCoordinates(e);
          this.setModalVisible(true);
          setTimeout(() => this.setModalVisible(false), 1000)
        }}>
        <Text style={styles.address}>{address}</Text>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible(false)}>
          <View style={[styles.modal, { left: this.state.pageX - 80, top: this.state.pageY - 25 }]}>
            <Text style={styles.modalText}>클립보드에 복사되었습니다</Text>
          </View>
        </Modal>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.main.light,
    padding: 15,
  },
  address: {
    fontSize: 40,
    color: colors.main.dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    position: 'absolute',
    backgroundColor: colors.main.dark,
    padding: 5,
    borderRadius: 5,
  },
  modalText: {
    fontSize: 15,
    color: colors.main.light,
  }
})
