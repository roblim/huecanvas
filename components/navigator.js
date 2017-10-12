import React from 'react'
import ReactNavigation from 'react-navigation';
import RoomFormContainer from './rooms/room_form_container';
// import Root from './root'

const { TabNavigator: Tabs } = ReactNavigation;

const TabNavigator = Tabs({
	Home: {screen: RoomFormContainer},
  RoomsNew: {screen: RoomFormContainer},
  // "roomsedit": {screen: RoomFormContainer},
});

export default TabNavigator
