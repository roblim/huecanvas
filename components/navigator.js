import React from 'react';
import ReactNavigation from 'react-navigation';
import {StackNavigator} from 'react-navigation';
import RoomFormContainer from './rooms/room_form_container';
import RoomsIndexContainer from './rooms/rooms_index_container';
import Root from './root';
import NavSlidersContainer from './nav/nav_sliders_container'
import NavSliders from './nav/nav_sliders'

const TabNavigator = StackNavigator({
	home: {screen: Root},
	roomsNew: {screen: RoomFormContainer},
	roomsIndex: {screen: RoomsIndexContainer},
}, {
  navigationOptions: {
    headerTintColor: 'white',
		headerStyle: {
			backgroundColor: 'black',
		},
		headerRight: (<NavSlidersContainer />),
		headerLeft: null
  },
});

export default TabNavigator;
