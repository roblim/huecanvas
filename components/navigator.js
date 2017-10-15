import React from 'react';
import ReactNavigation from 'react-navigation';
import {StackNavigator} from 'react-navigation';
import RoomFormContainer from './rooms/room_form_container';
import RoomsIndexContainer from './rooms/rooms_index_container';
import Root from './root';
import NavSlidersContainer from './nav/nav_sliders_container'
import RoomTemp from "./rooms/room_temp";

const TabNavigator = StackNavigator({
	home: {screen: Root},
	roomsNew: {screen: RoomFormContainer},
	roomsIndex: {screen: RoomsIndexContainer},
	roomTemp: {screen: RoomTemp}
}, {
  navigationOptions: {
    headerTintColor: 'white',
		headerStyle: {
			backgroundColor: 'black',
		},
		headerRight: (<NavSlidersContainer />)
  },
});

export default TabNavigator;
