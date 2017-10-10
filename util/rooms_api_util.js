export const fetchRooms = () => (
	AsyncStorage.getItem('@rooms')
);

export const fetchRoom = id => (
  AsyncStorage.getItem('@rooms:id')
);

export const createRoom = room => {
	let roomId = room.id
  return AsyncStorage.setItem('@rooms:roomId', room);
};

export const updateRoom = room => (
	AsyncStorage.getItem(room.id, (res) => {
  	AsyncStorage.mergeItem(res, room)
})
)

export const deleteRoom = id => (
	  AsyncStorage.removeItem('@rooms:id')
);
