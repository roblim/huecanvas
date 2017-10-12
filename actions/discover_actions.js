import jsHue from "jshue";
import * as APIUtil from "../util/lights_util";
export const RECEIVE_ALL_BRIDGES = "RECEIVE_ALL_BRIDGES";
export const RECEIVE_ALL_LIGHTS = "RECEIVE_ALL_LIGHTS";

let hue = jsHue();

var bridge = hue.bridge("10.1.10.67");

// var username = "XRdYkx2QsmVe-8AX5XO0NwuDKjK1JfJrq4fYLBAW"; @robs place
var username = "VJw19b5u6kZ2kWx8C5AqnaYe2eDS-kI2y8RHlL2o"; // @app academy

console.log('New username:', username);

var user = bridge.user(username);

export const fetchBridges = () => dispatch => {
  hue.discover().then((bridges) => dispatch(receiveAllBridges(bridges)))
}

export const fetchLights = () => dispatch => {
  user.getLights().then((lights) => dispatch(receiveAllLights(lights)))
}

const receiveAllBridges = (bridges) => ({
  type: RECEIVE_ALL_BRIDGES,
  bridges
})

const receiveAllLights = (lights) => {
  return {
  type: RECEIVE_ALL_LIGHTS,
  lights
}}
