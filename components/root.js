import React from 'react';
import { View, Text } from 'react-native';
import RoomsIndexContainer from './rooms/rooms_index_container';
import {
  StackNavigator,
} from 'react-navigation';

export default class Root extends React.Component {
  render() {
    return (
			<View>
				<Text>This is a test</Text>
        <RoomsIndexContainer/>
			</View>
    );
  }
}
