export const selectLights = (state) => {
  let lights = state.entities.lights
  let lightIds = Object.keys(lights);
  lightIds.forEach(id => (lights[id]['lightId'] = parseInt(id)));
  return Object.values(lights);
}
