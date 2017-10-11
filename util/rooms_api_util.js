import { AsyncStorage } from 'react-native'

// const getAll = function() {
// 		Promise.all(AsyncStorage.getAllKeys()
// 		.then(ks => {
// 			return ks.map(k => {
// 				AsyncStorage.getItem(k)
// 				// console.log(k);
// 			})
// 		})
// 	)
// }


export const fetchRooms = () => {
	return (AsyncStorage.getAllKeys()
	.then(ks => {
		return ks.map(k => {
			// let item = AsyncStorage.getItem(k)
			return AsyncStorage.getItem(k).then(res => res)
			// console.log(k);
		})
	})
)//.then(rooms => {
	// 	console.log(rooms);
	// 	rooms.map(room => result.room.id = room)
	// })
	// console.log(items);
};

export const fetchRoom = id => (
  AsyncStorage.getItem(`${id}`)
);

export const createRoom = room => {
	let roomId = room.id
  return AsyncStorage.setItem(`${roomId}`, JSON.stringify(room));
};

export const updateRoom = room => (
	AsyncStorage.getItem(`${room.id}`, (res) => {
  	AsyncStorage.mergeItem(JSON.stringify(res), JSON.stringify(room))
})
)

export const deleteRoom = id => (
	  AsyncStorage.removeItem(`${id}`)
);
