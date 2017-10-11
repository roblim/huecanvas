import merge from 'lodash/merge';

import {
	RECEIVE_ROOMS,
	RECEIVE_ROOM,
	REMOVE_ROOM
} from '../actions/room_actions';

const RoomsReducer = (state = {}, action) => {
	Object.freeze(state);
	let newState = merge({}, state);

	switch (action.type) {
		case RECEIVE_ROOMS:
			// console.log(state);
			// console.log(action);
			// let rooms = Promise.resolve(action.rooms)
			// console.log(rooms);
			action.rooms.map(room => {
				// let newroom = Promise.resolve(room)
				console.log(Promise.resolve(room));
				return newState[room.id] = room
			})
			console.log(newState);
			return newState;
		case RECEIVE_ROOM:
			newState[action.room.id] = action.room
			return newState
		case REMOVE_ROOM:
			delete newState[action.room.id]
			return newState
		default:
			return state;
	}
}

export default RoomsReducer;
