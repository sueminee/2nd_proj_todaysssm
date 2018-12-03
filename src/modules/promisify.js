import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import StatusBar from '../components/StatusBar';
import Map from '../components/missiondetail/Map';
import DeliveryList from '../components/missiondetail/DeliveryList';
import ConfirmButton from '../components/missiondetail/ConfirmButton';
import BackButton from '../components/missiondetail/BackButton';
import { getDeliveries, getAddresses, getCoordinates, getPickupAndDeliveries } from '../modules/GetLocations';
import { fonts, colors } from '../theme';

export default class MissionDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deliveries: [],
      addresses: [],
      coordinates: [],
      pickupAndDeliveries: [],
    };
  }

  componentWillMount = () => {
    getDeliveries()
    .then(deliveries => {
      getAddresses(deliveries)
      .then(addresses => {
        getCoordinates(addresses)
        .then(coordinates => {
          getPickupAndDeliveries(deliveries, this.props.pickup_place)
          .then(pickupAndDeliveries => {
            this.setState({
              deliveries: deliveries,
              coordinates: coordinates,
              pickupAndDeliveries: pickupAndDeliveries,
            })
          })
        }) 
      })
    })
    
    //deliveries들의 주소 array를 맵핑하여 하나씩 나눕니다.
    const addresses = await getAddresses(deliveries);
    //Google maps API에 요청하여 각 주소들의 좌표를 받아옵니다.
    const coordinates = await getCoordinates(addresses);
    
    const pickupAndDeliveries = await getPickupAndDeliveries(deliveries, this.props.pickup_place);
    await this.setState({
      deliveries: deliveries,
      coordinates: coordinates,
      pickupAndDeliveries: pickupAndDeliveries,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={styles.container.backgroundColor} />
        <Map coordinates={this.state.coordinates} />
        <DeliveryList deliveries={this.state.deliveries} />
        <BackButton />
        <ConfirmButton
          pickupAndDeliveries={this.state.pickupAndDeliveries}
          coordinates={this.state.coordinates}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main.light,
  },
});
