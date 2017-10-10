import { connect } from 'react-redux';
import React from 'react';
import { Text, View } from 'react-native';
import jsHue from 'jshue';

export default class LightIndexContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <View>
      <Text>Hello world!</Text>
      <Text></Text>
      </View>
    );
  }
}
