import { AsyncStorage } from 'react-native';
import merge from 'lodash/merge';

export const fetchRooms = () => {
	return AsyncStorage.getItem("rooms").then((res) => JSON.parse(res));
};

export const fetchRoom = id => (
	AsyncStorage.getItem("rooms").then(rooms => {
		rooms = JSON.parse(rooms);
		let myRoom = merge({}, rooms[id]);
		return myRoom;
	})
);

export const createRoom = room => {
	return AsyncStorage.getItem("rooms").then(rooms => {
		rooms = JSON.parse(rooms);
		let myRooms = merge({}, rooms);
		myRooms[room.id] = room;
		return AsyncStorage.mergeItem("rooms", JSON.stringify(myRooms));
	});
};

export const updateRoom = room => {
	return AsyncStorage.getItem("rooms").then(rooms => {
		rooms = JSON.parse(rooms);
		let myRooms = merge({}, rooms);
		myRooms[room.id] = room;
		// console.log(myRooms);
		return AsyncStorage.mergeItem("rooms", JSON.stringify(myRooms));
	});
};

export const deleteRoom = id => {
	return AsyncStorage.getItem('rooms').then(rooms => {
		rooms = JSON.parse(rooms);
		let myRooms = merge({}, rooms);
		delete myRooms[id];
		return AsyncStorage.setItem("rooms", JSON.stringify(myRooms));
	});
};
