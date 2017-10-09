import {api} from './util/rooms_index_api_util';
export const RECEIVE_LIGHTS = "RECEIVE_LIGHTS";
export const RECEIVE_ROOMS = "RECEIVE_ROOMS";
export const RECEIVE_ROOM = "RECEIVE_ROOM";


const receiveLights = lights =>{
  return({
    type: RECEIVE_LIGHTS,
    lights
  });
};

const receiveRooms = rooms =>{
  return({
    type: RECEIVE_ROOMS,
    rooms
  });
};

const receiveRoom = room =>{
  return({
    type: RECEIVE_ROOM,
    room
  });
};

//to set rooms data: localStorage.setItem('rooms', rooms);

export const fetchLights = () => dispatch =>(
  api.lights().then(lights => dispatch(receiveLights(lights)))
);

export const fetchRooms = () => dispatch =>(
  localStorage.getItem().then(rooms => dispatch(receiveRooms(rooms)))
);

export const fetchRoom = roomId => dispatch =>(
  localStorage.getItem(roomId).then(room => dispatch(receiveRoom(room)))
);
