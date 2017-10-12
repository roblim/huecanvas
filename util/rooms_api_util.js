import { AsyncStorage } from 'react-native'
import merge from 'lodash/merge';

export const fetchRooms = () => {
// 	return (AsyncStorage.getAllKeys()
// 	.then(ks => {
// 		let result = [];
// 		ks.forEach(k => {
// 			let resolved = AsyncStorage.getItem(k)
// 			console.log(resolved);
// 			resolved.then(res => result.push(JSON.parse(res)))
// 		})
// 		// console.log(result);
// 		return result;
// 	})
// )
	return AsyncStorage.getItem("rooms").then((res) => JSON.parse(res))
};

// export const fetchRoom = id => (
//   AsyncStorage.getItem(`${id}`)
// );

export const fetchRoom = id => (
	AsyncStorage.getItem(JSON.stringify("rooms")).then(rooms => {
		rooms = JSON.parse(rooms);
		return rooms[id]
	})
)

// export const createRoom = room => {
// 	// console.log(roomId);
//   return AsyncStorage.setItem(`${room.id}`, JSON.stringify(room));
// };

export const createRoom = room => {
	return AsyncStorage.getItem("rooms").then(rooms => {
		rooms = JSON.parse(rooms)
		let myRooms = merge({}, rooms);
		// console.log("room", room);
		myRooms[room.id] = room;
		console.log(myRooms);
		// return myRooms
		return AsyncStorage.mergeItem("rooms", JSON.stringify(myRooms))
	})//.then((rooms) => {
		// console.log("rooms", rooms);
	// })
}

export const updateRoom = room => (
	AsyncStorage.getItem(`${room.id}`, (res) => {
  	AsyncStorage.mergeItem(JSON.stringify(res), JSON.stringify(room))
})
)

// export const deleteRoom = id => (
// 	  AsyncStorage.removeItem(`${id}`)
// );

export const deleteRoom = id => {
	return AsyncStorage.getItem('rooms').then(rooms => {
		rooms = JSON.parse(rooms)
		delete rooms[id]
		AsyncStorage.setItem(JSON.stringify("rooms"), JSON.stringify(rooms))
	})
}
