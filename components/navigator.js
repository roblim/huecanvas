import React from 'react';
import ReactNavigation from 'react-navigation';
import {StackNavigator} from 'react-navigation';
import RoomFormContainer from './rooms/room_form_container';
import RoomsIndexContainer from './rooms/rooms_index_container';
import Root from './root';
import NavSlidersContainer from './nav/nav_sliders_container'
import RoomTemp from "./rooms/room_temp";
import { Text, View } from "react-native";

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
			height: 80
		},
		headerRight: (<NavSlidersContainer />),
		headerLeft: (<Text style={{color: '#383838', fontSize: 40, fontWeight: 'bold', flex: 1, marginLeft: 20, marginTop: -5}}>HueCanvas</Text>)
  },
});

export default TabNavigator;
