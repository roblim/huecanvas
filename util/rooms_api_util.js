import { AsyncStorage } from 'react-native';


export const fetchRooms = () => {
	let result = [];
	return (AsyncStorage.getAllKeys()
	.then(ks => {
		ks.forEach(k => {
			let resolved = AsyncStorage.getItem(k);
			resolved.then(res =>{
				result.push(JSON.parse(res));
			});
			result.push(resolved);
		});
		Promise.all(result).then(response => console.log(response));
	})
);
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
