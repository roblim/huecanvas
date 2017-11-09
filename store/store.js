import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';
import jsHue from 'jshue';
import createLoggerMiddleware from 'redux-logger';

const middlewares = [thunk, createLoggerMiddleware];

const appAcademyHue = "VJw19b5u6kZ2kWx8C5AqnaYe2eDS-kI2y8RHlL2o";
const homeHue = "-lVy6n6jyMVk-ZE4z2JGQ68Bhmb-Gkl7MzmEpPRg";
const appAcademyIP = '192.168.1.234';
const homeIP = '10.1.10.67';
const Hue = jsHue();
const Bridge = Hue.bridge(homeIP);
const User = Bridge.user(homeHue);


const configureStore = (preloadedState = testStore) => (
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
  entities: {
              rooms: {
                      1: {id: 1,
                         name: "Daddy’s",
                         lights: {
              										2: { lightId: 2, canvasPosition: { x: 0, y: 0 } },
              										3: { lightId: 3, canvasPosition: { x: 110, y: 110 } },
              										4: { lightId: 4, canvasPosition: { x: 230, y: 110 } },
              										5: { lightId: 5, canvasPosition: { x: 110, y: 300 }},
              									 }
                          }
                      }
            }
//   entities:{
//     lights:{
//       2: {
//       manufacturername:"Philips",
//       modelid:"LCT007",
//       name:"Lamp Right",
//       state: {
//         alert:"none",
//         bri:254,
//         colormode:"ct",
//         ct:366,
//         effect:"none",
//         hue:14956,
//         on:true,
//         reachable:true,
//         sat:140,
//         xy:[0.4571, 0.4097],
//       },
//       swupdate: {
//         lastinstall:null,
//         state:"noupdates"
//       },
//       swversion:"5.50.1.19085",
//       type:"Extended color light",
//       uniqueid:"00:17:88:01:10:41:b2:b5-0b"
//     },      3: {
//           manufacturername:"Philips",
//           modelid:"LCT007",
//           name:"Lamp Right",
//           state: {
//             alert:"none",
//             bri:254,
//             colormode:"ct",
//             ct:366,
//             effect:"none",
//             hue:14956,
//             on:true,
//             reachable:true,
//             sat:140,
//             xy:[0.4571, 0.4097],
//           },
//           swupdate: {
//             lastinstall:null,
//             state:"noupdates"
//           },
//           swversion:"5.50.1.19085",
//           type:"Extended color light",
//           uniqueid:"00:17:88:01:10:41:b2:b5-0b"
//         },
//         4: {
//         manufacturername:"Philips",
//         modelid:"LCT007",
//         name:"Lamp Right",
//         state: {
//           alert:"none",
//           bri:254,
//           colormode:"ct",
//           ct:366,
//           effect:"none",
//           hue:14956,
//           on:true,
//           reachable:true,
//           sat:140,
//           xy:[0.4571, 0.4097],
//         },
//         swupdate: {
//           lastinstall:null,
//           state:"noupdates"
//         },
//         swversion:"5.50.1.19085",
//         type:"Extended color light",
//         uniqueid:"00:17:88:01:10:41:b2:b5-0b"
//       },
//       5: {
//       manufacturername:"Philips",
//       modelid:"LCT007",
//       name:"Lamp Right",
//       state: {
//         alert:"none",
//         bri:254,
//         colormode:"ct",
//         ct:366,
//         effect:"none",
//         hue:14956,
//         on:true,
//         reachable:true,
//         sat:140,
//         xy:[0.4571, 0.4097],
//       },
//       swupdate: {
//         lastinstall:null,
//         state:"noupdates"
//       },
//       swversion:"5.50.1.19085",
//       type:"Extended color light",
//       uniqueid:"00:17:88:01:10:41:b2:b5-0b"
//     },
//     6: {
//     manufacturername:"Philips",
//     modelid:"LCT007",
//     name:"Lamp Right",
//     state: {
//       alert:"none",
//       bri:254,
//       colormode:"ct",
//       ct:366,
//       effect:"none",
//       hue:14956,
//       on:true,
//       reachable:true,
//       sat:140,
//       xy:[0.4571, 0.4097],
//     },
//     swupdate: {
//       lastinstall:null,
//       state:"noupdates"
//     },
//     swversion:"5.50.1.19085",
//     type:"Extended color light",
//     uniqueid:"00:17:88:01:10:41:b2:b5-0b"
//   },
//   7: {
//   manufacturername:"Philips",
//   modelid:"LCT007",
//   name:"Lamp Right",
//   state: {
//     alert:"none",
//     bri:254,
//     colormode:"ct",
//     ct:366,
//     effect:"none",
//     hue:14956,
//     on:true,
//     reachable:true,
//     sat:140,
//     xy:[0.4571, 0.4097],
//   },
//   swupdate: {
//     lastinstall:null,
//     state:"noupdates"
//   },
//   swversion:"5.50.1.19085",
//   type:"Extended color light",
//   uniqueid:"00:17:88:01:10:41:b2:b5-0b"
// },
//     8:
//       {
//       manufacturername: "Philips",
//       modelid: "LCT001",
//       name: "Color Bulb",
//       state:
//         {
//           alert:"none",
//           bri:254,
//           colormode:"ct",
//           ct:366,
//           effect:"none",
//           hue:14956,
//           on:true,
//           reachable:true,
//           sat:140,
//           xy:[0.4571, 0.4097],
//         },
//       swversion: "5.23.1.13452",
//       type: "Extended color light",
//       uniqueid: "00:17:88:01:00:ef:cf:88-0b"
//     } ,
//     9:
//       {
//       manufacturername: "Philips",
//       modelid: "LCT001",
//       name: "Bulb",
//       state:
//         {
//           alert:"none",
//           bri:254,
//           colormode:"ct",
//           ct:366,
//           effect:"none",
//           hue:14956,
//           on:true,
//           reachable:true,
//           sat:140,
//           xy:[0.4571, 0.4097],
//         },
//       swversion: "5.23.1.13452",
//       type: "Extended color light",
//       uniqueid: "00:17:88:01:00:ef:cf:88-0b"
//     },
//     10:
//       {
//       manufacturername: "Philips",
//       modelid: "LCT001",
//       name: "Bulb",
//       state:
//         {
//           alert:"none",
//           bri:254,
//           colormode:"ct",
//           ct:366,
//           effect:"none",
//           hue:14956,
//           on:true,
//           reachable:true,
//           sat:140,
//           xy:[0.4571, 0.4097],
//         },
//       swversion: "5.23.1.13452",
//       type: "Extended color light",
//       uniqueid: "00:17:88:01:00:ef:cf:88-0b"
//     },
//     11:
//       {
//       manufacturername: "Philips",
//       modelid: "LCT001",
//       name: "Bulb",
//       state:
//         {
//           alert:"none",
//           bri:254,
//           colormode:"ct",
//           ct:366,
//           effect:"none",
//           hue:14956,
//           on:true,
//           reachable:true,
//           sat:140,
//           xy:[0.4571, 0.4097],
//         },
//       swversion: "5.23.1.13452",
//       type: "Extended color light",
//       uniqueid: "00:17:88:01:00:ef:cf:88-0b"
//       }
//     }
//   }
};



// entities:{
//   lights:{
//     2: {
//     manufacturername:"Philips",
//     modelid:"LCT007",
//     name:"Lamp Right",
//     state: {
//       alert:"none",
//       bri:254,
//       colormode:"ct",
//       ct:366,
//       effect:"none",
//       hue:14956,
//       on:true,
//       reachable:true,
//       sat:140,
//       xy:[0.4571, 0.4097],
//     },
//     swupdate: {
//       lastinstall:null,
//       state:"noupdates"
//     },
//     swversion:"5.50.1.19085",
//     type:"Extended color light",
//     uniqueid:"00:17:88:01:10:41:b2:b5-0b"
//   },
  // 8:
  //   {
  //   manufacturername: "Philips",
  //   modelid: "LCT001",
  //   name: "Color Bulb",
  //   state:
  //     {
  //       alert:"none",
  //       bri:254,
  //       colormode:"ct",
  //       ct:366,
  //       effect:"none",
  //       hue:14956,
  //       on:true,
  //       reachable:true,
  //       sat:140,
  //       xy:[0.4571, 0.4097],
  //     },
  //   swversion: "5.23.1.13452",
  //   type: "Extended color light",
  //   uniqueid: "00:17:88:01:00:ef:cf:88-0b"
  // },
  // 9:
  //   {
  //   manufacturername: "Philips",
  //   modelid: "LCT001",
  //   name: "Color Bulb",
  //   state:
  //     {
  //       alert:"none",
  //       bri:254,
  //       colormode:"ct",
  //       ct:366,
  //       effect:"none",
  //       hue:14956,
  //       on:true,
  //       reachable:true,
  //       sat:140,
  //       xy:[0.4571, 0.4097],
  //     },
  //   swversion: "5.23.1.13452",
  //   type: "Extended color light",
  //   uniqueid: "00:17:88:01:00:ef:cf:88-0b"
  //   }

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
// },
//   9:
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
