import React from 'react';
import ReactNavigation from 'react-navigation';
import {StackNavigator} from 'react-navigation';
import RoomFormContainer from './rooms/room_form_container';
import RoomsIndexContainer from './rooms/rooms_index_container';
import Root from './root';
<<<<<<< HEAD
import NavSlidersContainer from './nav/nav_sliders_container'
import RoomTemp from "./rooms/room_temp";
=======
import NavSliders from './nav/nav_sliders'
>>>>>>> scene

const TabNavigator = StackNavigator({
	home: {screen: Root},
	roomsNew: {screen: RoomFormContainer},
<<<<<<< HEAD
	roomsIndex: {screen: RoomsIndexContainer},
	roomTemp: {screen: RoomTemp}
=======
  home: {screen: Root},
  roomsEdit: {screen: RoomFormContainer},
	roomsIndex: {screen: RoomsIndexContainer}
>>>>>>> scene
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
