import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';
import jsHue from 'jshue';
import createLoggerMiddleware from 'redux-logger';

const middlewares = [thunk, createLoggerMiddleware];

const appAcademyHue = "VJw19b5u6kZ2kWx8C5AqnaYe2eDS-kI2y8RHlL2o";
const homeHue = '54gEGoS1LxdOnFSk3fWMfMa7sQYUi76ERzWRGhZs';
const appAcademyIP = '192.168.1.234';
const homeIP = '10.1.10.67'
const Hue = jsHue();
const Bridge = Hue.bridge(homeIP);
const User = Bridge.user(homeHue);


const configureStore = (preloadedState) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  )
);

export default configureStore;

let testStore = {
  admin: {
    bridge: Bridge,
    user: User,
    bridgeIP: homeIP
  },
  entities:{
    scenes: {
 "0": {
  "name": "Margriet",
  "lights": [
   "3"
  ],
  "active": true
 },
 "1": {
  "name": "Margriet",
  "lights": [
   "3"
  ],
  "active": true
 },
 "3": {
  "name": "Margriet",
  "lights": [
   "3"
  ],
  "active": true
 },
 "78d9ae79d-on-0": {
  "name": "Rise & shine on ",
  "lights": [
   "1",
   "2"
  ],
  "active": true
 },
 "d7741cd71-on-0": {
  "name": "Read on 0",
  "lights": [
   "1",
   "2"
  ],
  "active": true
 },
 "756e841fb-on-0": {
  "name": "Flappie on 0",
  "lights": [
   "1",
   "2"
  ],
  "active": true
 },
 "e069ec8aa-on-0": {
  "name": "Snooze on 0",
  "lights": [
   "1",
   "2"
  ],
  "active": true
 },
 "32b256994-on-0": {
  "name": "Twilight on 0",
  "lights": [
   "1",
   "2"
  ],
  "active": true
 },
 "aab2bce11-on-0": {
  "name": "Read on 0",
  "lights": [
   "1",
   "2",
   "3"
  ],
  "active": true
 },
 "7ba24d163-on-0": {
  "name": "Read on 0",
  "lights": [
   "1",
   "2",
   "3"
  ],
  "active": true
 },
 "ca13d654a-on-0": {
  "name": "Margriet on 0",
  "lights": [
   "1",
   "2",
   "3"
  ],
  "active": true
 },
 "0e70aa160-on-0": {
  "name": "Margriet on 0",
  "lights": [
   "1",
   "2",
   "3"
  ],
  "active": true
 },
 "3fe33cc48-on-0": {
  "name": "Read on 0",
  "lights": [
   "1",
   "2",
   "3"
  ],
  "active": true
 },
 "b2595e9d5-off-0": {
  "name": "Flappie off 0",
  "lights": [
   "1",
   "2"
  ],
  "active": true
 },
 "755f00bd9-on-0": {
  "name": "Twilight on 0",
  "lights": [
   "1",
   "2",
   "3"
  ],
  "active": true
 },
 "15efe031d-on-0": {
  "name": "Nieuwe sceneoper",
  "lights": [
   "3"
  ],
  "active": true
 },
 "a3b93d4b7-on-0": {
  "name": "Nieuwe sceneoper",
  "lights": [
   "3"
  ],
  "active": true
 },
 "4726a26fc-on-0": {
  "name": "Nieuwe scene on ",
  "lights": [
   "3"
  ],
  "active": true
 },
 "5ea14e59a-on-0": {
  "name": "Viooltjes on 0",
  "lights": [
   "1",
   "2",
   "3"
  ],
  "active": true
 },
 "7d151928e-on-0": {
  "name": "Hibiscus on 0",
  "lights": [
   "3"
  ],
  "active": true
 },
 "Margriet": {
  "name": "Margriet",
  "lights": [
   "1",
   "2",
   "3"
  ],
  "active": true
 }
},

    lights:{
      2: {
      manufacturername:"Philips",
      modelid:"LCT007",
      name:"Lamp Right",
      state: {
        alert:"none",
        bri:254,
        colormode:"ct",
        ct:366,
        effect:"none",
        hue:14956,
        on:true,
        reachable:true,
        sat:140,
        xy:[0.4571, 0.4097],
      },
      swupdate: {
        lastinstall:null,
        state:"noupdates"
      },
      swversion:"5.50.1.19085",
      type:"Extended color light",
      uniqueid:"00:17:88:01:10:41:b2:b5-0b"
      }
    }
  }
};


// }

// {
//   8:
//     {
//     manufacturername: "Philips",
//     modelid: "LCT001",
//     name: "Color Bulb",
//     state:
//       {
//       alert: null,
//       bri: null,
//       colormode: null,
//       ct: null,
//       effect: null,
//       hue: null,
//       on: null,
//       reachable: null,
//       sat: null,
//       xy: null
//       },
//     swversion: "5.23.1.13452",
//     type: "Extended color light",
//     uniqueid: "00:17:88:01:00:ef:cf:88-0b"
//     }
// }
