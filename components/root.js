import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import LightIndexContainer from './light_index/light_index_container.js';

export default class Root extends React.Component {
  render() {
    return (
			<View style={styles.container}>
        <LightIndexContainer/>
			</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
