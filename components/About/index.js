import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class About extends Component {
  render() {
    return (
      <View style={{margin: 50, marginTop: 88}}>
        <Text>You are on the About page.</Text>
        <Text style={{marginTop: 30, color: '#ff3300'}} onPress={Actions.home}>Go Home</Text>
      </View>
    );
  }
}
