import React from 'react'
import ReactNavigation from 'react-navigation';
import {StackNavigator} from 'react-navigation'
import RoomFormContainer from './rooms/room_form_container';
import Root from './root'

const { TabNavigator: Tabs } = ReactNavigation;

const TabNavigator = StackNavigator({
	roomsNew: {screen: RoomFormContainer},
  home: {screen: Root},
  roomsEdit: {screen: RoomFormContainer},
});

export default TabNavigator
