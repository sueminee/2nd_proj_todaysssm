import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import MissionEntry from './MissionEntry';

export default class MissionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {this.props.missions.map((mission, index) => {
          return <MissionEntry key={index} isFirst={!index} mission={mission} />
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});