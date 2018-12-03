import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors, font } from '../../theme';

export default class DeliveryEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const delivery = this.props.delivery;
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <Text style={styles.num}>{this.props.num}  </Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.important}>{delivery.address}</Text>
          <View style={styles.details}>
            <View style={{ flex: 1 }}>
              <Text style={styles.detail}>{delivery.name}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.detail}>{delivery.boxes}박스</Text>
            </View>
            <View style={{ flex: 3, alignItems: 'flex-end' }}>
              <Text style={styles.detail}>{delivery.phone}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.main.light,
    borderBottomWidth: 1,
    borderColor: colors.main.midGray,
    padding: 7,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  left: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    flex: 14,
  },
  num: {
    fontSize: 18,
    color: colors.main.dark,
    fontWeight: 'bold',
  },
  important: {
    fontSize: 18,
    color: colors.main.dark,
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: 6,
  },
  detail: {
    fontSize: 15,
    color: colors.main.midGray,
  },
});
