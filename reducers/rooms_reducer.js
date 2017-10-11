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
			console.log(state);
			console.log(action);
			// action.rooms.forEach(room => {
			// 	let resolvedRooms = Promise.resolve(room)
			// 	resolvedRooms.then(room => newState[JSON.parse(room).id] = JSON.parse(room))
			// })
			action.rooms.forEach(room => {
				newState[room.id] = room
			})
			console.log(newState);
			return newState;
		case RECEIVE_ROOM:
			console.log(state);
			console.log(action);
			// let resolvedRoom = Promise.resolve(action.room)
			// resolvedRoom.then(room => newState[JSON.parse(room).id] = JSON.parse(room))
			newState[action.room.id] = action.room
			console.log(newState);
			return newState
		case REMOVE_ROOM:
			console.log(state);
			console.log(action);
			delete newState[action.roomId]
			console.log(newState);
			return newState
		default:
			return state;
	}
}

export default RoomsReducer;
