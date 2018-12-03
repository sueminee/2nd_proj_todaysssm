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

  async componentWillMount() {
    // 이 mission이 가지고 있는 deliveries array를 서버에 요청합니다.
    const deliveries = await getDeliveries();
    //deliveries array를 맵핑하여 주소정보만을 추출합니다.
    const addresses = await getAddresses(deliveries);
    //추출한 주소정보들을 Google maps API에 GET 요청하여 각 주소들의 좌표(위도,경도)를 받아옵니다.
    const coordinates = await getCoordinates(addresses);
    //맨앞에 픽업장소를 추가하고, 그다음은 배송지 순서대로 배송지 정보를 state에 설정합니다. 
    const pickupAndDeliveries = await getPickupAndDeliveries(deliveries, this.props.pickup_place);
    //setState는 비동기함수이기 때문에 위의 일련의 요청들이 끝날때까지 기다렸다가 실행합니다.
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
