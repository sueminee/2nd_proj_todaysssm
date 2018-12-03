import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { colors, fonts } from '../../theme';
import DeliveryEntry from './DeliveryEntry';

export default class DeliveryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView >
          {this.props.deliveries.map((delivery, index) => {
            return <DeliveryEntry key={index} num={index + 1} delivery={delivery} />
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main.mid,
  },
});
