import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LightIndexContainer from './components/light_index/light_index_container.js';
import RoomsIndexContainer from './components/rooms/rooms_index_container.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LightIndexContainer />
        <RoomsIndexContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
