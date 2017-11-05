export const selectLights = (state) => {
  let lights = state.entities.lights
  let lightIds = Object.keys(lights);
  lightIds.forEach(id => (lights[id]['lightId'] = parseInt(id)));
  return Object.values(lights);
}

export const selectRoom = (state, roomId) => {
  if (!roomId) { return []; }
  return state.entities.rooms[roomId];
}

export const selectRoomLights = (state, room) => {
  if (!room) { return selectLights(state); }
  let lights = state.entities.lights;
  if (Object.keys(lights).length < 1) { return []; }
  // debugger;
  let roomLightIds = Object.keys(state.entities.rooms[room.id].lights);
  let roomLights = [];
  roomLightIds.forEach(id => roomLights.push(lights[id]));
  return roomLights;
}

export const selectLightPositions = (state, room) => {
  if (!room) { return {}; }
  let roomLights = state.entities.rooms[room.id].lights;
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

export const selectUnassignedLights = state => {
  if (state.entities.rooms) {
    let rooms = Object.values(state.entities.rooms);
    let assignedLights = []
    rooms.forEach(room => {
      if (room.lights) {
        assignedLights = assignedLights.concat(room.lights)
      }
    });
    if (assignedLights.length > 0) {
      return Object.values(state.entities.lights).filter(light => {
          return assignedLights.some(assignedLight => {
            return assignedLight.lightId == light.lightId
          })
      })
    } else {
      return Object.values(state.entities.lights)
    }
  } else {
    return Object.values(state.entities.lights)
  }
}
