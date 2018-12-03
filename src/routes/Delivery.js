import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, fonts } from '../theme';
import Statusbar from '../components/StatusBar';
import Map from '../components/delivery/Map';
import CallButton from '../components/delivery/CallButton';
import CompleteButton from '../components/delivery/CompleteButton';
import CameraButton from '../components/delivery/CameraButton';
import DeliveryDetail from '../components/delivery/DeliveryDetail';
import { Actions } from 'react-native-router-flux';

export default class Delivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  indexIncrease = () => {
    if (this.state.index !== this.props.pickupAndDeliveries.length - 1) {
      this.setState({
        index: this.state.index + 1
      });
    } else {
      Actions.missions();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Statusbar backgroundColor={styles.container.backgroundColor} />
        <Map
          coordinates={this.props.coordinates}
          index={this.state.index}
        />
        <DeliveryDetail
          address={this.props.pickupAndDeliveries[this.state.index].address}
        />
        <View style={styles.buttons}>
          <CallButton
            delivery={this.props.pickupAndDeliveries[this.state.index]}
          />
          <CompleteButton
            indexIncrease={this.indexIncrease}
          />
          <CameraButton />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main.light,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row'
  }
})