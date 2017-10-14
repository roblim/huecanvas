import jsHue from "jshue";
import * as APIUtil from "../util/admin_api_util";

export const RECEIVE_ALL_BRIDGES = "RECEIVE_ALL_BRIDGES";
export const RECEIVE_ALL_LIGHTS = "RECEIVE_ALL_LIGHTS";
export const RECEIVE_BRIDGE = "RECEIVE_BRIDGE";
export const RECEIVE_USER = "RECEIVE_USER";

let bridgeIP;
let bridge;

export const fetchBridges = () => dispatch => {
  APIUtil.discover().then((bridges) => dispatch(receiveBridge(bridges[0].internalipaddress)))
};


export const createUser = (bridge) => dispatch => {
   APIUtil.createUser(bridge).then((data) => {
     console.log(data);
     if (data[0].error) {
       dispatch(receiveUser(data[0].error))
     } else {
     user = bridge.user(data[0].success.username);
     console.log(user);
     dispatch(receiveUser(user))
   }
   }
).catch(function(error) {
    console.log('There has been a problem with your createUser operation: ' + error.message);
  })
}

export const fetchLights = (user) => dispatch => {
  user.getLights().then((lights) => dispatch(receiveAllLights(lights)))
}

const receiveAllBridges = (bridges) => ({
  type: RECEIVE_ALL_BRIDGES,
  bridges
});

const receiveAllLights = (lights) => {
  return {
  type: RECEIVE_ALL_LIGHTS,
  lights
}};

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

const receiveBridge = (ip) => {

  return {
  type: RECEIVE_BRIDGE,
  bridge: APIUtil.Hue.bridge(ip),
  bridgeIP: `${ip}`
}};
