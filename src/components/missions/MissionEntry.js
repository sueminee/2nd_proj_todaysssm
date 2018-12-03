import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { colors, fonts } from '../../theme';
import PickUp from './PickUp';
import Confirm from './Confirm';


export default class MissionEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const mission = this.props.mission;
    const detailText = this.props.isFirst ? styles.firstDetailTexts : styles.detailTexts
    return (
      <TouchableOpacity
        style={this.props.isFirst ? styles.firstMission : styles.notFirstMission}
        onPress={() => {
          Actions.missionDetail({
            pickup_place: mission.pickup_place,
            deliveriesId: mission.deliveriesId,
          })
        }}>
        <View style={styles.column}>
          <View style={styles.leftDetails} >
            <PickUp pickup_place={mission.pickup_place} />
            <Text style={detailText}> {mission.pickup_time}</Text>
          </View>
          <View style={styles.leftDetails}>
            <Text style={detailText}>
              {mission.num_deliveries}건 {mission.boxes}박스
            </Text>
          </View>
          <View style={styles.leftDetails}>
            <Text style={detailText}>
              {mission.area}
            </Text>
          </View>
          <View style={styles.leftDetails}>
            <Text style={detailText}>
              {mission.time_limit}시간 이내
            </Text>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.rightDetails}>
            <Text style={[styles.price, { fontSize: this.props.isFirst ? 40 : 25 }]}>₩{mission.price}</Text>
          </View>
          <View style={[styles.rightDetails, { alignItems: 'flex-end' }]}>
            {this.props.isFirst
              ? <Confirm
                pickup_place={mission.pickup_place}
                deliveriesId={mission.deliveriesId} />
              : null}
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  firstMission: {
    height: 200,
    flexDirection: 'row',
    backgroundColor: colors.main.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderColor: colors.main.lightGray,
    borderBottomWidth: 5,
  },
  notFirstMission: {
    height: 150,
    flexDirection: 'row',
    backgroundColor: colors.main.light,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderColor: colors.main.lightGray,
    borderBottomWidth: 5,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  leftDetails: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  rightDetails: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
  },
  firstDetailTexts: {
    fontSize: 22,
    color: colors.main.dark,
    fontWeight: 'bold',
    padding: 8,
  },
  detailTexts: {
    fontSize: 18,
    color: colors.main.dark,
    padding: 8,
  },
  price: {
    color: colors.sub.red,
    fontWeight: 'bold',
  },
});
