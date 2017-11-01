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
			// console.log(action.rooms);
			return action.rooms;
		case RECEIVE_ROOM:
			// console.log('oldstate', state);
			console.log('action', action);
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
