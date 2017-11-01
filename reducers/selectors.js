export const selectLights = (state) => {
  let lights = state.entities.lights
  let lightIds = Object.keys(lights);
  lightIds.forEach(id => (lights[id]['lightId'] = parseInt(id)));
  return Object.values(lights);
}

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
