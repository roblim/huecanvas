import jsHue from "jshue";
import * as APIUtil from "../util/admin_api_util";

export const RECEIVE_ALL_BRIDGES = "RECEIVE_ALL_BRIDGES";
export const RECEIVE_ALL_LIGHTS = "RECEIVE_ALL_LIGHTS";
export const RECEIVE_BRIDGE = "RECEIVE_BRIDGE";
export const RECEIVE_USERNAME = "RECEIVE_USERNAME";


<<<<<<< HEAD
const appAcademyHue = "VJw19b5u6kZ2kWx8C5AqnaYe2eDS-kI2y8RHlL2o";
const homeHue = '54gEGoS1LxdOnFSk3fWMfMa7sQYUi76ERzWRGhZs';
const appAcademyIP = '192.168.1.234';
const homeIP = '10.1.10.67'

let hue = jsHue();
var bridge = hue.bridge(appAcademyIP);
var username = appAcademyHue;
=======
var bridge = APIUtil.bridge;
let bridgeIP = APIUtil.bridgeIP;
let username;

//
// bridge.createUser('HueCanvas', function(data) {
//     // extract bridge-generated username from returned data
//     username = data[0].success.username;
//     console.log('New username:', username);
//
// });
console.log(username);
username = "VJw19b5u6kZ2kWx8C5AqnaYe2eDS-kI2y8RHlL2o"; // @app academy
let user = bridge.user(username);
console.log(bridgeIP);

// var username = "XRdYkx2QsmVe-8AX5XO0NwuDKjK1JfJrq4fYLBAW"; @robs place
>>>>>>> master

// console.log('New username:', username);

// var user = bridge.user(username);

export const fetchBridges = () => dispatch => {
  APIUtil.discover().then((bridges) => dispatch(receiveBridge(bridge))).catch(function(error) {
    console.log('There has been a problem with your fetch operation: ' + error.message);
  });
}

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
