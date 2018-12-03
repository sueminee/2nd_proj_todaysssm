import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import StatusBar from '../components/StatusBar';
import TitleBar from '../components/missions/TitleBar';
import MissionList from '../components/missions/MissionList';
import fakeMissions from '../environment/mockMission.json';
import { fonts, colors } from '../theme';

export default class Mission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: true,
    };
  }

  componentDidMount() {
    this.checkAuth();
  }

  checkAuth() {
    if (!this.state.token) {
      Actions.login();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={styles.container.backgroundColor} />
        <TitleBar />
        <MissionList missions={fakeMissions} />
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
