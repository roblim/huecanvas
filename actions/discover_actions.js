import jsHue from "jshue";
import * as APIUtil from "../util/admin_api_util";

export const RECEIVE_ALL_BRIDGES = "RECEIVE_ALL_BRIDGES";
export const RECEIVE_ALL_LIGHTS = "RECEIVE_ALL_LIGHTS";
export const RECEIVE_BRIDGE = "RECEIVE_BRIDGE";
export const RECEIVE_USERNAME = "RECEIVE_USERNAME";

let hue = jsHue();

var bridge = APIUtil.bridge;
let bridgeIP = APIUtil.bridgeIP;
let user = APIUtil.user;
console.log(bridgeIP);

// var username = "XRdYkx2QsmVe-8AX5XO0NwuDKjK1JfJrq4fYLBAW"; @robs place
// var username = "VJw19b5u6kZ2kWx8C5AqnaYe2eDS-kI2y8RHlL2o"; // @app academy

// console.log('New username:', username);

// var user = bridge.user(username);

export const fetchBridges = () => dispatch => {
  APIUtil.discover().then((bridges) => dispatch(receiveBridge(bridge))).catch(function(error) {
    console.log('There has been a problem with your fetch operation: ' + error.message);
  });
}

console.log(user);

export const getUser = () => dispatch => {
  // APIUtil.userName().then((userName) => user = dispatch(receiveUsername(bridge.user(userName))))
  dispatch(receiveUsername(user))
}

export const fetchLights = () => dispatch => {
  user.getLights().then((lights) => dispatch(receiveAllLights(lights)))
}

const receiveAllBridges = (bridges) => ({
  type: RECEIVE_ALL_BRIDGES,
  bridges
})

const receiveAllLights = (lights) => {
  console.log(lights);
  return {
  type: RECEIVE_ALL_LIGHTS,
  lights
}}

const admin = (user) => {
  type: ADMIN,
  bridge,
  user,
  bridgeIP
}

const receiveUsername = (user) => {
  type: RECEIVE_USERNAME,
  user
}

const receiveBridge = (bridge) => {
  type: RECEIVE_BRIDGE,
  bridge,
  bridgeIP
}
