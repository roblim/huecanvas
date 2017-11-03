import * as APIUtil from '../util/rooms_api_util';

export const RECEIVE_ROOMS = "RECEIVE_ROOMS";
export const RECEIVE_ROOM = "RECEIVE_ROOM";
export const RECEIVE_ROOM_ERRORS = "RECEIVE_ROOM_ERRORS";
export const REMOVE_ROOM = "REMOVE_ROOM";

export const receiveRoom = room => {
	// console.log(room);
	return {
	type: RECEIVE_ROOM,
	room
}};

export const receiveRooms = rooms => ({
	type: RECEIVE_ROOMS,
	rooms
});

export const removeRoom = roomId => ({
	type: REMOVE_ROOM,
	roomId
});

export const receiveRoomErrors = errors => ({
	type: RECEIVE_ROOM_ERRORS,
	errors
});

export const fetchRooms = () => dispatch => (
	APIUtil.fetchRooms().then(rooms => {
		return dispatch(receiveRooms(rooms));
	}, err => (
		dispatch(receiveRoomErrors(err.responseJSON))
	))
);

export const fetchRoom = id => dispatch => (
	APIUtil.fetchRoom(id).then(room => (
		dispatch(receiveRoom(room))
	), err => (
		dispatch(receiveRoomErrors(err.responseJSON))
	))
);

export const createRoom = room => dispatch => (
	APIUtil.createRoom(room).then(function() {
		console.log("CREATE", room);
		return dispatch(receiveRoom(room))
	}, err => (
		dispatch(receiveRoomErrors(err.responseJSON))
	))
);

export const updateRoom = room => dispatch => {
	console.log("UPDATE", room);
	return APIUtil.updateRoom(room).then(() => (
		dispatch(receiveRoom(room))
	), err => (
		dispatch(receiveRoomErrors(err.responseJSON))
	))
};

export const deleteRoom = id => dispatch => (
	APIUtil.deleteRoom(id).then(() => (
		dispatch(removeRoom(id))
	), err => (
		dispatch(receiveRoomErrors(err.responseJSON))
	))
);
