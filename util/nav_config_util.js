import React from 'react'
import {
  StackNavigator,
} from 'react-navigation';
import RoomFormContainer from '../components/rooms/room_form_container';

const AppNavigator = StackNavigator({
  RoomNew: {screen: RoomFormContainer},
  // RoomEdit: {screen: RoomFormContainer},
});

export default AppNavigator
