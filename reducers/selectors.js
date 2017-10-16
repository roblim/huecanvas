export const selectLights = (state) => {
  let lights = state.entities.lights
  let lightIds = Object.keys(lights);
  lightIds.forEach(id => (lights[id]['lightId'] = parseInt(id)));
  return Object.values(lights);
}

export const selectRoom = (state, roomId) => {
  if (!roomId) { return null; }
  return state.entities.rooms[roomId];
}

export const selectRoomLights = (state, roomId) => {
  if (!roomId) { return []; }
  let lights = state.entities.lights;
  if (Object.keys(lights).length < 1) { return []; }
  let roomLightIds = Object.keys(state.entities.rooms[roomId].lights);
  let roomLights = [];
  roomLightIds.forEach(id => roomLights.push(lights[id]));
  return roomLights;
}

export const selectLightPositions = (state, roomId) => {
  if (!roomId) { return null; }
  let roomLights = state.entities.rooms[roomId].lights;
  let roomLightIds = Object.keys(roomLights);
  let lightPositions = {};
  roomLightIds.forEach(id => lightPositions[id] = roomLights[id].canvasPosition);
  console.log(lightPositions);
  return lightPositions;
}

// {
//   entities: {
//               rooms: {
//                       1: {id: 1,
//                          name: "Daddy’s",
//                          lights: {
//                           				2: {lightId: 2, canvasPosition: null},
//                           				3: {lightId: 3, canvasPosition: null},
//                           				4: {lightId: 4, canvasPosition: null},
//                           				5: {lightId: 5, canvasPosition: null},
//                       	 			   }
//                           }
//                       }
//             }
// }
