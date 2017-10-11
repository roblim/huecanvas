import { AsyncStorage } from 'react-native'

export const fetchRooms = () => {
	return (AsyncStorage.getAllKeys()
	.then(ks => {
		let result = [];
		ks.forEach(k => {
			let resolved = Promise.resolve(AsyncStorage.getItem(k))
			resolved.then(res => result.push(JSON.parse(res)))
		})
		console.log(result[1]);
		return result;
	})
)
};

export const fetchRoom = id => (
  AsyncStorage.getItem(`${id}`)
);

export const createRoom = room => {
	// console.log(roomId);
  return AsyncStorage.setItem(`${room.id}`, JSON.stringify(room));
};

export const updateRoom = room => (
	AsyncStorage.getItem(`${room.id}`, (res) => {
  	AsyncStorage.mergeItem(JSON.stringify(res), JSON.stringify(room))
})
)

export const deleteRoom = id => (
	  AsyncStorage.removeItem(`${id}`)
);
