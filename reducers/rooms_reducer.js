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
			console.log(action);
			action.rooms.map(room => newState[room.id] = room)
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
