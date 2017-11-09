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
  entities:{
    scenes: {
    	"FcT0-4ND1uE47Fp": {
    		"name": "Jasper",
    		"lights": [
    			"1",
    			"2",
    			"3",
    			"4",
    			"5",
    			"6",
    			"7",
    			"8",
    			"9",
    			"10",
    			"11",
    			"12",
    			"13",
    			"14",
    			"15",
    			"16"
    		],
    		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
    		"recycle": false,
    		"locked": false,
    		"appdata": {
    			"version": 1,
    			"data": "fqTWN_r02_d99"
    		},
    		"picture": "",
    		"lastupdated": "2017-10-20T03:51:54",
    		"version": 2
    	},
    	"3PsGuqK3B6-R7zb": {
    		"name": "Red",
    		"lights": [
    			"1",
    			"2",
    			"3",
    			"4",
    			"5",
    			"6",
    			"7",
    			"8",
    			"9",
    			"10",
    			"11",
    			"12",
    			"13",
    			"14",
    			"15",
    			"16"
    		],
    		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
    		"recycle": false,
    		"locked": false,
    		"appdata": {
    			"version": 1,
    			"data": "hLiho_r02_d99"
    		},
    		"picture": "",
    		"lastupdated": "2017-10-20T03:57:25",
    		"version": 2
    	},
    	"D35Cc9ZF-qn7pAM": {
    		"name": "Violet",
    		"lights": [
    			"1",
    			"2",
    			"3",
    			"4",
    			"5",
    			"6",
    			"7",
    			"8",
    			"9",
    			"10",
    			"11",
    			"12",
    			"13",
    			"14",
    			"15",
    			"16"
    		],
    		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
    		"recycle": false,
    		"locked": false,
    		"appdata": {
    			"version": 1,
    			"data": "9vnl2_r02_d99"
    		},
    		"picture": "",
    		"lastupdated": "2017-10-20T03:59:44",
    		"version": 2
    	},
    	"sGRW87kSuuBWpIT": {
    		"name": "Bright",
    		"lights": [
    			"1",
    			"2",
    			"3",
    			"4",
    			"5",
    			"6",
    			"7",
    			"8",
    			"9",
    			"10",
    			"11",
    			"12",
    			"13",
    			"14",
    			"15",
    			"16"
    		],
    		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
    		"recycle": true,
    		"locked": true,
    		"appdata": {
    			"version": 1,
    			"data": "KJ7uH_r00_d05"
    		},
    		"picture": "",
    		"lastupdated": "2017-10-20T23:29:53",
    		"version": 2
    	},
    	"7F8gqIEwKP1QAxC": {
    		"name": "Wake Up end",
    		"lights": [
    			"1",
    			"2",
    			"3",
    			"4",
    			"5",
    			"6",
    			"7",
    			"8",
    			"9",
    			"10",
    			"11",
    			"12",
    			"13",
    			"14",
    			"15",
    			"16"
    		],
    		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
    		"recycle": true,
    		"locked": true,
    		"appdata": {
    			"version": 1,
    			"data": "9xrjL_r00"
    		},
    		"picture": "",
    		"lastupdated": "2017-10-20T23:31:50",
    		"version": 2
    	},
    	"tb9FhYqOx48zabP": {
    		"name": "Wake Up init",
    		"lights": [
    			"1",
    			"2",
    			"3",
    			"4",
    			"5",
    			"6",
    			"7",
    			"8",
    			"9",
    			"10",
    			"11",
    			"12",
    			"13",
    			"14",
    			"15",
    			"16"
    		],
    		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
    		"recycle": true,
    		"locked": true,
    		"appdata": {
    			"version": 1,
    			"data": "lEWU7_r00"
    		},
    		"picture": "",
    		"lastupdated": "2017-10-20T23:31:51",
    		"version": 2
    	},
    	"4tWmKMjxRiICmXq": {
    		"name": "Energize",
    		"lights": [
    			"1",
    			"2",
    			"3",
    			"4",
    			"5",
    			"6",
    			"7",
    			"8",
    			"9",
    			"10",
    			"11",
    			"12",
    			"13",
    			"14",
    			"15",
    			"16"
    		],
    		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
    		"recycle": true,
    		"locked": false,
    		"appdata": {
    			"version": 1,
    			"data": "ftIEf_r00_d04"
    		},
    		"picture": "",
    		"lastupdated": "2017-10-22T08:36:50",
    		"version": 2
    	},
    	"8iwK7jgL4eZlRcN": {
    		"name": "Color",
    		"lights": [
    			"1",
    			"2",
    			"3"
    		],
    		"owner": "odymERVKZUD1XQcUHZIlOCzqn3MOsUerkoVJHoFu",
    		"recycle": true,
    		"locked": false,
    		"appdata": {},
    		"picture": "",
    		"lastupdated": "2017-10-20T01:08:39",
    		"version": 2
    	},
    	"IXKiNlheFI12FCb": {
    		"name": "Relax",
    		"lights": [
    			"1",
    			"2",
    			"3",
    			"4",
    			"5",
    			"6",
    			"7",
    			"8",
    			"9",
    			"10",
    			"11",
    			"12",
    			"13",
    			"14",
    			"15",
    			"16"
    		],
    		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
    		"recycle": false,
    		"locked": false,
    		"appdata": {
    			"version": 1,
    			"data": "QvTFH_r02_d01"
    		},
    		"picture": "",
    		"lastupdated": "2017-10-20T03:42:02",
    		"version": 2
    	},
    	"5NP6Jb9MVsNkKvv": {
    		"name": "Read",
    		"lights": [
    			"1",
    			"2",
    			"3",
    			"4",
    			"5",
    			"6",
    			"7",
    			"8",
    			"9",
    			"10",
    			"11",
    			"12",
    			"13",
    			"14",
    			"15",
    			"16"
    		],
    		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
    		"recycle": false,
    		"locked": false,
    		"appdata": {
    			"version": 1,
    			"data": "ebVCx_r02_d02"
    		},
    		"picture": "",
    		"lastupdated": "2017-10-20T03:42:03",
    		"version": 2
    	},
    	"lMIjk0BChnejBeE": {
    		"name": "Concentrate",
    		"lights": [
    			"1",
    			"2",
    			"3",
    			"4",
    			"5",
    			"6",
    			"7",
    			"8",
    			"9",
    			"10",
    			"11",
    			"12",
    			"13",
    			"14",
    			"15",
    			"16"
    		],
    		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
    		"recycle": false,
    		"locked": false,
    		"appdata": {
    			"version": 1,
    			"data": "xst6T_r02_d03"
    		},
    		"picture": "",
    		"lastupdated": "2017-10-20T03:42:03",
    		"version": 2
    	},
    	"7cW9dX-ErFk5FqR": {
    		"name": "Energize",
    		"lights": [
    			"1",
    			"2",
    			"3",
    			"4",
    			"5",
    			"6",
    			"7",
    			"8",
    			"9",
    			"10",
    			"11",
    			"12",
    			"13",
    			"14",
    			"15",
    			"16"
    		],
    		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
    		"recycle": false,
    		"locked": false,
    		"appdata": {
    			"version": 1,
    			"data": "9Astz_r02_d04"
    		},
    		"picture": "",
    		"lastupdated": "2017-10-20T03:42:04",
    		"version": 2
    	},
    	"Nv-TmYkYEUwQeFB": {
    		"name": "Bright",
    		"lights": [
    			"1",
    			"2",
    			"3",
    			"4",
    			"5",
    			"6",
    			"7",
    			"8",
    			"9",
    			"10",
    			"11",
    			"12",
    			"13",
    			"14",
    			"15",
    			"16"
    		],
    		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
    		"recycle": false,
    		"locked": false,
    		"appdata": {
    			"version": 1,
    			"data": "QS04k_r02_d05"
    		},
    		"picture": "",
    		"lastupdated": "2017-10-20T03:42:05",
    		"version": 2
    	},
    	"zPEQwcoTYjId89f": {
    		"name": "Dimmed",
    		"lights": [
    			"1",
    			"2",
    			"3",
    			"4",
    			"5",
    			"6",
    			"7",
    			"8",
    			"9",
    			"10",
    			"11",
    			"12",
    			"13",
    			"14",
    			"15",
    			"16"
    		],
    		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
    		"recycle": false,
    		"locked": false,
    		"appdata": {
    			"version": 1,
    			"data": "dY38A_r02_d06"
    		},
    		"picture": "",
    		"lastupdated": "2017-10-20T03:42:05",
    		"version": 2
    	},
    	"NrMPESFVuprNwwy": {
    		"name": "Nightlight",
    		"lights": [
    			"1",
    			"2",
    			"3",
    			"4",
    			"5",
    			"6",
    			"7",
    			"8",
    			"9",
    			"10",
    			"11",
    			"12",
    			"13",
    			"14",
    			"15",
    			"16"
    		],
    		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
    		"recycle": false,
    		"locked": false,
    		"appdata": {
    			"version": 1,
    			"data": "wW26E_r02_d07"
    		},
    		"picture": "",
    		"lastupdated": "2017-10-20T03:42:05",
    		"version": 2
    	},
    	"Q5FRXKSZ4nQNfkw": {
    		"name": "Savanna sunset",
    		"lights": [
    			"1",
    			"2",
    			"3",
    			"4",
    			"5",
    			"6",
    			"7",
    			"8",
    			"9",
    			"10",
    			"11",
    			"12",
    			"13",
    			"14",
    			"15",
    			"16"
    		],
    		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
    		"recycle": false,
    		"locked": false,
    		"appdata": {
    			"version": 1,
    			"data": "QiJgj_r02_d15"
    		},
    		"picture": "",
    		"lastupdated": "2017-10-20T03:42:06",
    		"version": 2
    	},
    	"FIoF3WLSN1p6EXx": {
    		"name": "Tropical twilight",
    		"lights": [
    			"1",
    			"2",
    			"3",
    			"4",
    			"5",
    			"6",
    			"7",
    			"8",
    			"9",
    			"10",
    			"11",
    			"12",
    			"13",
    			"14",
    			"15",
    			"16"
    		],
    		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
    		"recycle": false,
    		"locked": false,
    		"appdata": {
    			"version": 1,
    			"data": "DQBVv_r02_d16"
    		},
    		"picture": "",
    		"lastupdated": "2017-10-20T03:42:06",
    		"version": 2
    	},
    	"qOm1A74KT6C1AQK": {
    		"name": "Arctic aurora",
    		"lights": [
    			"1",
    			"2",
    			"3",
    			"4",
    			"5",
    			"6",
    			"7",
    			"8",
    			"9",
    			"10",
    			"11",
    			"12",
    			"13",
    			"14",
    			"15",
    			"16"
    		],
    		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
    		"recycle": false,
    		"locked": false,
    		"appdata": {
    			"version": 1,
    			"data": "Cs2mh_r02_d17"
    		},
    		"picture": "",
    		"lastupdated": "2017-10-20T03:42:07",
    		"version": 2
    	},
    	"2WSgDfa9XkrIdXL": {
    		"name": "Spring blossom",
    		"lights": [
    			"1",
    			"2",
    			"3",
    			"4",
    			"5",
    			"6",
    			"7",
    			"8",
    			"9",
    			"10",
    			"11",
    			"12",
    			"13",
    			"14",
    			"15",
    			"16"
    		],
    		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
    		"recycle": false,
    		"locked": false,
    		"appdata": {
    			"version": 1,
    			"data": "BttEb_r02_d18"
    		},
    		"picture": "",
    		"lastupdated": "2017-10-20T03:42:08",
    		"version": 2
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
    },
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

// SCENES BRUV

// {
// 	"FcT0-4ND1uE47Fp": {
// 		"name": "Jasper",
// 		"lights": [
// 			"1",
// 			"2",
// 			"3",
// 			"4",
// 			"5",
// 			"6",
// 			"7",
// 			"8",
// 			"9",
// 			"10",
// 			"11",
// 			"12",
// 			"13",
// 			"14",
// 			"15",
// 			"16"
// 		],
// 		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
// 		"recycle": false,
// 		"locked": false,
// 		"appdata": {
// 			"version": 1,
// 			"data": "fqTWN_r02_d99"
// 		},
// 		"picture": "",
// 		"lastupdated": "2017-10-20T03:51:54",
// 		"version": 2
// 	},
// 	"3PsGuqK3B6-R7zb": {
// 		"name": "Red",
// 		"lights": [
// 			"1",
// 			"2",
// 			"3",
// 			"4",
// 			"5",
// 			"6",
// 			"7",
// 			"8",
// 			"9",
// 			"10",
// 			"11",
// 			"12",
// 			"13",
// 			"14",
// 			"15",
// 			"16"
// 		],
// 		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
// 		"recycle": false,
// 		"locked": false,
// 		"appdata": {
// 			"version": 1,
// 			"data": "hLiho_r02_d99"
// 		},
// 		"picture": "",
// 		"lastupdated": "2017-10-20T03:57:25",
// 		"version": 2
// 	},
// 	"D35Cc9ZF-qn7pAM": {
// 		"name": "Violet",
// 		"lights": [
// 			"1",
// 			"2",
// 			"3",
// 			"4",
// 			"5",
// 			"6",
// 			"7",
// 			"8",
// 			"9",
// 			"10",
// 			"11",
// 			"12",
// 			"13",
// 			"14",
// 			"15",
// 			"16"
// 		],
// 		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
// 		"recycle": false,
// 		"locked": false,
// 		"appdata": {
// 			"version": 1,
// 			"data": "9vnl2_r02_d99"
// 		},
// 		"picture": "",
// 		"lastupdated": "2017-10-20T03:59:44",
// 		"version": 2
// 	},
// 	"sGRW87kSuuBWpIT": {
// 		"name": "Bright",
// 		"lights": [
// 			"1",
// 			"2",
// 			"3",
// 			"4",
// 			"5",
// 			"6",
// 			"7",
// 			"8",
// 			"9",
// 			"10",
// 			"11",
// 			"12",
// 			"13",
// 			"14",
// 			"15",
// 			"16"
// 		],
// 		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
// 		"recycle": true,
// 		"locked": true,
// 		"appdata": {
// 			"version": 1,
// 			"data": "KJ7uH_r00_d05"
// 		},
// 		"picture": "",
// 		"lastupdated": "2017-10-20T23:29:53",
// 		"version": 2
// 	},
// 	"7F8gqIEwKP1QAxC": {
// 		"name": "Wake Up end",
// 		"lights": [
// 			"1",
// 			"2",
// 			"3",
// 			"4",
// 			"5",
// 			"6",
// 			"7",
// 			"8",
// 			"9",
// 			"10",
// 			"11",
// 			"12",
// 			"13",
// 			"14",
// 			"15",
// 			"16"
// 		],
// 		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
// 		"recycle": true,
// 		"locked": true,
// 		"appdata": {
// 			"version": 1,
// 			"data": "9xrjL_r00"
// 		},
// 		"picture": "",
// 		"lastupdated": "2017-10-20T23:31:50",
// 		"version": 2
// 	},
// 	"tb9FhYqOx48zabP": {
// 		"name": "Wake Up init",
// 		"lights": [
// 			"1",
// 			"2",
// 			"3",
// 			"4",
// 			"5",
// 			"6",
// 			"7",
// 			"8",
// 			"9",
// 			"10",
// 			"11",
// 			"12",
// 			"13",
// 			"14",
// 			"15",
// 			"16"
// 		],
// 		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
// 		"recycle": true,
// 		"locked": true,
// 		"appdata": {
// 			"version": 1,
// 			"data": "lEWU7_r00"
// 		},
// 		"picture": "",
// 		"lastupdated": "2017-10-20T23:31:51",
// 		"version": 2
// 	},
// 	"4tWmKMjxRiICmXq": {
// 		"name": "Energize",
// 		"lights": [
// 			"1",
// 			"2",
// 			"3",
// 			"4",
// 			"5",
// 			"6",
// 			"7",
// 			"8",
// 			"9",
// 			"10",
// 			"11",
// 			"12",
// 			"13",
// 			"14",
// 			"15",
// 			"16"
// 		],
// 		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
// 		"recycle": true,
// 		"locked": false,
// 		"appdata": {
// 			"version": 1,
// 			"data": "ftIEf_r00_d04"
// 		},
// 		"picture": "",
// 		"lastupdated": "2017-10-22T08:36:50",
// 		"version": 2
// 	},
// 	"8iwK7jgL4eZlRcN": {
// 		"name": "Color",
// 		"lights": [
// 			"1",
// 			"2",
// 			"3"
// 		],
// 		"owner": "odymERVKZUD1XQcUHZIlOCzqn3MOsUerkoVJHoFu",
// 		"recycle": true,
// 		"locked": false,
// 		"appdata": {},
// 		"picture": "",
// 		"lastupdated": "2017-10-20T01:08:39",
// 		"version": 2
// 	},
// 	"IXKiNlheFI12FCb": {
// 		"name": "Relax",
// 		"lights": [
// 			"1",
// 			"2",
// 			"3",
// 			"4",
// 			"5",
// 			"6",
// 			"7",
// 			"8",
// 			"9",
// 			"10",
// 			"11",
// 			"12",
// 			"13",
// 			"14",
// 			"15",
// 			"16"
// 		],
// 		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
// 		"recycle": false,
// 		"locked": false,
// 		"appdata": {
// 			"version": 1,
// 			"data": "QvTFH_r02_d01"
// 		},
// 		"picture": "",
// 		"lastupdated": "2017-10-20T03:42:02",
// 		"version": 2
// 	},
// 	"5NP6Jb9MVsNkKvv": {
// 		"name": "Read",
// 		"lights": [
// 			"1",
// 			"2",
// 			"3",
// 			"4",
// 			"5",
// 			"6",
// 			"7",
// 			"8",
// 			"9",
// 			"10",
// 			"11",
// 			"12",
// 			"13",
// 			"14",
// 			"15",
// 			"16"
// 		],
// 		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
// 		"recycle": false,
// 		"locked": false,
// 		"appdata": {
// 			"version": 1,
// 			"data": "ebVCx_r02_d02"
// 		},
// 		"picture": "",
// 		"lastupdated": "2017-10-20T03:42:03",
// 		"version": 2
// 	},
// 	"lMIjk0BChnejBeE": {
// 		"name": "Concentrate",
// 		"lights": [
// 			"1",
// 			"2",
// 			"3",
// 			"4",
// 			"5",
// 			"6",
// 			"7",
// 			"8",
// 			"9",
// 			"10",
// 			"11",
// 			"12",
// 			"13",
// 			"14",
// 			"15",
// 			"16"
// 		],
// 		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
// 		"recycle": false,
// 		"locked": false,
// 		"appdata": {
// 			"version": 1,
// 			"data": "xst6T_r02_d03"
// 		},
// 		"picture": "",
// 		"lastupdated": "2017-10-20T03:42:03",
// 		"version": 2
// 	},
// 	"7cW9dX-ErFk5FqR": {
// 		"name": "Energize",
// 		"lights": [
// 			"1",
// 			"2",
// 			"3",
// 			"4",
// 			"5",
// 			"6",
// 			"7",
// 			"8",
// 			"9",
// 			"10",
// 			"11",
// 			"12",
// 			"13",
// 			"14",
// 			"15",
// 			"16"
// 		],
// 		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
// 		"recycle": false,
// 		"locked": false,
// 		"appdata": {
// 			"version": 1,
// 			"data": "9Astz_r02_d04"
// 		},
// 		"picture": "",
// 		"lastupdated": "2017-10-20T03:42:04",
// 		"version": 2
// 	},
// 	"Nv-TmYkYEUwQeFB": {
// 		"name": "Bright",
// 		"lights": [
// 			"1",
// 			"2",
// 			"3",
// 			"4",
// 			"5",
// 			"6",
// 			"7",
// 			"8",
// 			"9",
// 			"10",
// 			"11",
// 			"12",
// 			"13",
// 			"14",
// 			"15",
// 			"16"
// 		],
// 		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
// 		"recycle": false,
// 		"locked": false,
// 		"appdata": {
// 			"version": 1,
// 			"data": "QS04k_r02_d05"
// 		},
// 		"picture": "",
// 		"lastupdated": "2017-10-20T03:42:05",
// 		"version": 2
// 	},
// 	"zPEQwcoTYjId89f": {
// 		"name": "Dimmed",
// 		"lights": [
// 			"1",
// 			"2",
// 			"3",
// 			"4",
// 			"5",
// 			"6",
// 			"7",
// 			"8",
// 			"9",
// 			"10",
// 			"11",
// 			"12",
// 			"13",
// 			"14",
// 			"15",
// 			"16"
// 		],
// 		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
// 		"recycle": false,
// 		"locked": false,
// 		"appdata": {
// 			"version": 1,
// 			"data": "dY38A_r02_d06"
// 		},
// 		"picture": "",
// 		"lastupdated": "2017-10-20T03:42:05",
// 		"version": 2
// 	},
// 	"NrMPESFVuprNwwy": {
// 		"name": "Nightlight",
// 		"lights": [
// 			"1",
// 			"2",
// 			"3",
// 			"4",
// 			"5",
// 			"6",
// 			"7",
// 			"8",
// 			"9",
// 			"10",
// 			"11",
// 			"12",
// 			"13",
// 			"14",
// 			"15",
// 			"16"
// 		],
// 		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
// 		"recycle": false,
// 		"locked": false,
// 		"appdata": {
// 			"version": 1,
// 			"data": "wW26E_r02_d07"
// 		},
// 		"picture": "",
// 		"lastupdated": "2017-10-20T03:42:05",
// 		"version": 2
// 	},
// 	"Q5FRXKSZ4nQNfkw": {
// 		"name": "Savanna sunset",
// 		"lights": [
// 			"1",
// 			"2",
// 			"3",
// 			"4",
// 			"5",
// 			"6",
// 			"7",
// 			"8",
// 			"9",
// 			"10",
// 			"11",
// 			"12",
// 			"13",
// 			"14",
// 			"15",
// 			"16"
// 		],
// 		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
// 		"recycle": false,
// 		"locked": false,
// 		"appdata": {
// 			"version": 1,
// 			"data": "QiJgj_r02_d15"
// 		},
// 		"picture": "",
// 		"lastupdated": "2017-10-20T03:42:06",
// 		"version": 2
// 	},
// 	"FIoF3WLSN1p6EXx": {
// 		"name": "Tropical twilight",
// 		"lights": [
// 			"1",
// 			"2",
// 			"3",
// 			"4",
// 			"5",
// 			"6",
// 			"7",
// 			"8",
// 			"9",
// 			"10",
// 			"11",
// 			"12",
// 			"13",
// 			"14",
// 			"15",
// 			"16"
// 		],
// 		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
// 		"recycle": false,
// 		"locked": false,
// 		"appdata": {
// 			"version": 1,
// 			"data": "DQBVv_r02_d16"
// 		},
// 		"picture": "",
// 		"lastupdated": "2017-10-20T03:42:06",
// 		"version": 2
// 	},
// 	"qOm1A74KT6C1AQK": {
// 		"name": "Arctic aurora",
// 		"lights": [
// 			"1",
// 			"2",
// 			"3",
// 			"4",
// 			"5",
// 			"6",
// 			"7",
// 			"8",
// 			"9",
// 			"10",
// 			"11",
// 			"12",
// 			"13",
// 			"14",
// 			"15",
// 			"16"
// 		],
// 		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
// 		"recycle": false,
// 		"locked": false,
// 		"appdata": {
// 			"version": 1,
// 			"data": "Cs2mh_r02_d17"
// 		},
// 		"picture": "",
// 		"lastupdated": "2017-10-20T03:42:07",
// 		"version": 2
// 	},
// 	"2WSgDfa9XkrIdXL": {
// 		"name": "Spring blossom",
// 		"lights": [
// 			"1",
// 			"2",
// 			"3",
// 			"4",
// 			"5",
// 			"6",
// 			"7",
// 			"8",
// 			"9",
// 			"10",
// 			"11",
// 			"12",
// 			"13",
// 			"14",
// 			"15",
// 			"16"
// 		],
// 		"owner": "aTqJem2IeIaXYShaaCC2xaqeGSwbg68hKreWr5eS",
// 		"recycle": false,
// 		"locked": false,
// 		"appdata": {
// 			"version": 1,
// 			"data": "BttEb_r02_d18"
// 		},
// 		"picture": "",
// 		"lastupdated": "2017-10-20T03:42:08",
// 		"version": 2
// 	}
// }
