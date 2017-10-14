import {
        blinkLight,
        setLightOff,
        setLightOn,
        setBri,
        incBri,
        decBri,
        setAllLightsOff,
        setAllLightsOn,
        setLightColor,
        setMiredTemperature,
        putLightName
      } from '../util/lights_util';

export const RECEIVE_LIGHT_STATE = 'RECEIVE_LIGHT_STATE';
export const RECEIVE_LIGHT_NAME = 'RECEIVE_LIGHT_NAME';
export const TURN_ALL_LIGHTS_OFF = 'TURN_ALL_LIGHTS_OFF';
export const TURN_ALL_LIGHTS_ON = 'TURN_ALL_LIGHTS_ON';

import jsHue from 'jshue';

const appAcademyHue = "VJw19b5u6kZ2kWx8C5AqnaYe2eDS-kI2y8RHlL2o";
const homeHue = '54gEGoS1LxdOnFSk3fWMfMa7sQYUi76ERzWRGhZs';
const appAcademyIP = '192.168.1.234';
const homeIP = '10.1.10.67'
const Hue = jsHue();
const Bridge = Hue.bridge(homeIP);
const User = Bridge.user(homeHue);

export const receiveLightState = (lightId, lightState) => ({
  type: RECEIVE_LIGHT_STATE,
  lightId,
  lightState
});

export const receiveLightName = (lightId, name) => ({
  type: RECEIVE_LIGHT_NAME,
  lightId,
  name
});

export const turnLightOff = (user, lightId) => dispatch => (
  setLightOff(user, lightId).then(
    lightState => dispatch(receiveLightState(
      lightId,
      { on: Object.values(lightState[0].success)[0] }
    ))
  )
);

export const turnLightOn = (user, lightId) => dispatch => (
  setLightOn(user, lightId).then(
    lightState => dispatch(receiveLightState(
      lightId,
      { on: Object.values(lightState[0].success)[0] }
    ))
  )
);

export const changeBrightness = (user, lightId, brightness) => dispatch => (
  setBri(user, lightId, brightness).then(
    lightState => dispatch(receiveLightState(
      lightId,
      { bri: Object.values(lightState[0].success)[0] }
    ))
  )
);

export const increaseBrightness = (user, lightId, increment) => dispatch => (
  incBri(user, lightId, increment).then(
    lightState => dispatch(receiveLightState(
      lightId,
      { bri: Object.values(lightState[0].success)[0] }
    ))
  )
);

export const decreaseBrightness = (user, lightId, decrement) => dispatch => (
  decBri(user, lightId, decrement).then(
    lightState => dispatch(receiveLightState(
      lightId,
      { bri: Object.values(lightState[0].success)[0] }
    ))
  )
);

export const turnAllLightsOff = (user) => dispatch => (
  setAllLightsOff(user).then(
    lightState => dispatch({ type: TURN_ALL_LIGHTS_OFF })
  )
);

export const turnAllLightsOn = (user) => dispatch => (
  setAllLightsOn(user).then(
    lightState => dispatch({ type: TURN_ALL_LIGHTS_ON })
  )
);

export const changeColor = (user, lightId, rgbObject) => dispatch => (
  setLightColor(user, lightId, rgbObject).then(
    lightState => dispatch(receiveLightState(
      lightId,
      {
        xy: Object.values(lightState[1].success)[0],
        bri: Object.values(lightState[2].success)[0],
        colormode: 'xy'
      }
    ))
  )
);

export const changeTemperature = (user, lightId, miredTemp) => dispatch => (
  setMiredTemperature(user, lightId, miredTemp).then(
    lightState => dispatch(receiveLightState(
      lightId,
      {
        ct: Object.values(lightState[0].success)[0],
        colormode: 'ct'
      }
    ))
  )
);

export const updateLightName = (user, lightId, name) => dispatch => (
  putLightName(user, lightId, name).then(
    r => dispatch(receiveLightName(lightId, Object.values(r[0].success)[0]))
  )
);
