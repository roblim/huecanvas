import jsHue from "jshue";
import * as APIUtil from "../util/admin_api_util";

export const RECEIVE_ALL_BRIDGES = "RECEIVE_ALL_BRIDGES";
export const RECEIVE_ALL_LIGHTS = "RECEIVE_ALL_LIGHTS";
export const RECEIVE_BRIDGE = "RECEIVE_BRIDGE";
export const RECEIVE_USERNAME = "RECEIVE_USERNAME";
let username;


APIUtil.Bridge.createUser(`HueCanvas#iPad${Math.random * 100}`).then((data) => {
}, (errors) => {
  console.log(errors);
})

export const fetchBridges = () => dispatch => {
  APIUtil.discover().then((bridges) => dispatch(receiveBridge(bridge))).catch(function(error) {
    console.log('There has been a problem with your fetch operation: ' + error.message);
  });
};

let user;

export const createUser = () => dispatch => {
    console.log("here");
   APIUtil.createUser().then((data) => {
     user = data[0].success.username;
     dispatch(receiveUser(data[0].success.username)
   )
   }
)
  .catch(function(error) {
    console.log('There has been a problem with your fetch operation: ' + error.message);
  })
}

export const fetchLights = () => dispatch => {
  APIUtil.User.getLights().then((lights) => dispatch(receiveAllLights(lights)))
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

const receiveUsername = (user) => {
  type: RECEIVE_USERNAME,
  user
};

const receiveBridge = (bridge) => {
  type: RECEIVE_BRIDGE,
  bridge,
  bridgeIP
};
