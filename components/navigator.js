import React from 'react';
import ReactNavigation from 'react-navigation';
import {StackNavigator} from 'react-navigation';
import RoomFormContainer from './rooms/room_form_container';
import RoomsIndexContainer from './rooms/rooms_index_container';
import Root from './root';
import NavSliders from './nav/nav_sliders'
import RoomTemp from "./rooms/room_temp";

const { TabNavigator: Tabs } = ReactNavigation;

const TabNavigator = StackNavigator({
	roomsNew: {screen: RoomFormContainer},
  home: {screen: Root},
  roomsEdit: {screen: RoomFormContainer},
	roomsIndex: {screen: RoomsIndexContainer}
}, {
  navigationOptions: {
    headerTintColor: 'white',
		headerStyle: {
			backgroundColor: 'black',
		},
		headerRight: (<NavSliders />)
  },
});

export default TabNavigator;
