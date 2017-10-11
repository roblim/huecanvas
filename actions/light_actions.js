import {
        blinkLight,
        setLightOff,
        setLightOn,
        setBrightness,
        incBrightness,
        decBrightness,
        setAllLightsOff,
        setAllLightsOn,
        rgbToXY,
        setLightColor,
        setLightTemperature
      } from '../util/light_api_util';

export const RECEIVE_LIGHT_STATE = 'RECEIVE_LIGHT_STATE';

export const receiveLightState = (lightId, lightState) => ({
  type: RECEIVE_LIGHT_STATE,
  lightState
});

export const turnLightOff = (user, lightId) => dispatch => (
  setLightOff(user, lightId).then(
    lightState => dispatch(receiveLightState(
      lightId,
      { on: Object.values(data[0].success)[0] }
    ))
  )
);

export const turnLightOn = (user, lightId) => dispatch => (
  setLightOn(user, lightId).then(
    lightState => dispatch(receiveLightState(
      lightId,
      { on: Object.values(data[0].success)[0] }
    ))
  )
);

export const changeBrightness = (user, lightId, brightness) => dispatch => (
  setBri(user, lightId, brightness).then(
    lightState => dispatch(receiveLightState(
      lightId,
      { bri: Object.values(data[0].success)[0] }
    ))
  )
);

export const increaseBrightness = (user, lightId, increment) => dispatch => (
  incBri(user, lightId, increment).then(
    lightState => dispatch(receiveLightState(
      lightId,
      { bri: Object.values(data[0].success)[0] }
    ))
  )
);

export const decreaseBrightness = (user, lightId, decrement) => dispatch => (
  decBri(user, lightId, decrement).then(
    lightState => dispatch(receiveLightState(
      lightId,
      { bri: Object.values(data[0].success)[0] }
    ))
  )
);

// {
//   8: {
//     manufacturername: "Philips",
//     modelid: "LCT001",
//     name: "Color Bulb",
//     state:
//       {
//       alert: "select",
//       bri: 1,
//       colormode: "xy",
//       ct: 290,
//       effect: "none",
//       hue: 25600,
//       on: true,
//       reachable: true,
//       sat: 254,
//       xy: [0.409, 0.518]
//       },
//     swversion: "5.23.1.13452",
//     type: "Extended color light",
//     uniqueid: "00:17:88:01:00:ef:cf:88-0b"
//   }
// }