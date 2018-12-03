import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class PickUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const pickup_place = this.props.pickup_place;
    if (pickup_place === '남부터미널') {
      return (
        <View style={{ height: 25, justifyContent: 'center' }}>
          <Text style={{ backgroundColor: '#86942A', fontSize: 18, color: '#ffffff', fontWeight: 'bold' }}> {pickup_place} </Text>
        </View>
      )
    } else if (pickup_place === '노량진수산시장') {
      return (
        <View style={{ height: 25, justifyContent: 'center' }}>
          <Text style={{ backgroundColor: '#dd8d2a', fontSize: 18, color: '#ffffff', fontWeight: 'bold' }}> {pickup_place} </Text>
        </View>
      )
    }
    else {
      return (
        <View style={{ height: 25, justifyContent: 'center' }}>
          <Text style={{ backgroundColor: '#000000', fontSize: 18, color: '#ffffff', fontWeight: 'bold' }}> {pickup_place} </Text>
        </View>
      )
    }
  }
}
