import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { getDeliveries, getAddresses, getCoordinates, getPickupAndDeliveries } from '../../modules/GetLocations';
import { colors, fonts } from '../../theme';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deliveries: [],
      addresses: [],
      coordinates: [],
      pickupAndDeliveries: [],
      gotCoordinates: false,
    };
  }

  async componentWillMount() {
    const deliveries = await getDeliveries();
    const addresses = await getAddresses(deliveries);
    const coordinates = await getCoordinates(addresses);
    const pickupAndDeliveries = await getPickupAndDeliveries(deliveries, this.props.pickup_place);
    await this.setState({
      coordinates: coordinates,
      pickupAndDeliveries: pickupAndDeliveries,
      gotCoordinates: true,
    })
  }

  render() {
    if (!this.state.gotCoordinates) {
      return null;
    }
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          Actions.delivery({
            pickupAndDeliveries: this.state.pickupAndDeliveries,
            coordinates: this.state.coordinates,
          })
        }}>
        <Icon name='check-circle' size={40} color='#ffffff' style={styles.icon} />
        <Text style={styles.text}>  바로 수락</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.main.darkGray,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
  icon: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: colors.main.light,
    fontWeight: 'bold',
  },
})
