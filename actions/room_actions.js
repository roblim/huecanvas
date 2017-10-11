import * as APIUtil from '../util/rooms_api_util';

export const RECEIVE_ROOMS = "RECEIVE_ROOMS";
export const RECEIVE_ROOM = "RECEIVE_ROOM";
export const RECEIVE_ROOM_ERRORS = "RECEIVE_ROOM_ERRORS";
export const REMOVE_ROOM = "REMOVE_ROOM";

export const receiveRoom = room => ({
	type: RECEIVE_ROOM,
	room
});

export const receiveRooms = rooms => ({
	type: RECEIVE_ROOMS,
	rooms
});

export const removeRoom = room => ({
	type: REMOVE_ROOM,
	room
});

export const receiveRoomErrors = errors => ({
	type: RECEIVE_ROOM_ERRORS,
	errors
});

export const fetchRooms = () => dispatch => (
	APIUtil.fetchRooms().then(rooms => (
		dispatch(receiveRooms(rooms))
	), err => (
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
	APIUtil.createRoom(room).then(room => (
		dispatch(receiveRoom(room))
	), err => (
		dispatch(receiveRoomErrors(err.responseJSON))
	))
);

export const updateRoom = room => dispatch => (
	APIUtil.updateRoom(room).then(room => (
		dispatch(receiveRoom(room))
	), err => (
		dispatch(receiveRoomErrors(err.responseJSONS))
	))
);

export const deleteRoom = id => dispatch => (
	APIUtil.deleteRoom(id).then(room => (
		dispatch(removeRoom(room))
	), err => (
		dispatch(receiveRoomErrors(err.responseJSON))
	))
);
