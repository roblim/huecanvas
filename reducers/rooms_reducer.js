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
<<<<<<< HEAD
			action.rooms.forEach(room => {
				let resolvedRooms = Promise.resolve(room)
				resolvedRooms.then(room => newState[JSON.parse(room).id] = JSON.parse(room))
			})
			action.rooms.forEach(room => {
				newState[room.id] = room
			})
			return newState;
		case RECEIVE_ROOM:
			// let resolvedRoom = Promise.resolve(action.room)
			// resolvedRoom.then(room => newState[JSON.parse(room).id] = JSON.parse(room))
			newState[action.room.id] = action.room
=======
			console.log(state);
			console.log(action);
			console.log(action.rooms);
			return action.rooms;
		case RECEIVE_ROOM:
			console.log('oldstate', state);
			console.log('action', action);
			newState[action.room.id] = action.room
			console.log('newState', newState);
>>>>>>> 0245ab93a2e52a36935bdf0fb04793b279936271
			return newState
		case REMOVE_ROOM:

			delete newState[action.roomId]
			return newState
		default:
			return state;
	}
}

export default RoomsReducer;
