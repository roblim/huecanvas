import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class NavSliders extends React.Component {

	render() {
		return (<Text style={styles.test}>TEST</Text>)
	}

}

const styles = StyleSheet.create({
  test: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
		color: 'white'
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
