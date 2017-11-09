import merge from 'lodash/merge';

import {
	RECEIVE_ROOMS,
	RECEIVE_ROOM,
	REMOVE_ROOM
} from '../actions/room_actions';
import { Dimensions } from 'react-native';

const RoomsReducer = (state = {}, action) => {
	Object.freeze(state);
	let newState = merge({}, state);
	let Window = Dimensions.get('window');

	switch (action.type) {
		case RECEIVE_ROOMS:
		let rooms = {}
		Object.values(action.rooms).forEach(room => {
			if (room.coordinates.height !== Window.height/6 || room.coordinates.width !== 205) {
				room.coordinates.height = Window.height/6;
				room.coordinates.width = 205;
				rooms[room.id] = room
			} else {
				rooms[room.id] = room
			}
		})
		console.log(rooms);
			// console.log(state);
			// console.log(action);
			// console.log(action.rooms);
			return action.rooms;
		case RECEIVE_ROOM:
			// console.log('oldstate', state);
			console.log('action', action);
			if (action.room.coordinates.height !== Window.height/6 || action.room.coordinates.width !== 205) {
				action.room.coordinates.height = Window.height/6
				action.room.coordinates.width = 205
			}
			newState[action.room.id] = action.room;
			// console.log('newState', newState);
			return newState;
		case REMOVE_ROOM:
			delete newState[action.roomId];
			return newState;
		default:
			return state;
	}
};

export default RoomsReducer;
