import jsHue from "jshue";

const appAcademyHue = "VJw19b5u6kZ2kWx8C5AqnaYe2eDS-kI2y8RHlL2o";
const homeHue = '54gEGoS1LxdOnFSk3fWMfMa7sQYUi76ERzWRGhZs';
let precitaHue = "PtOObSxmdrIP0lwZeL2jTtmAge2AFUMEF9Lu1ayy";
const fakeUser = "newdeveloper"
const appAcademyIP = '192.168.1.234';
const precitaIP = '10.0.0.31';
const homeIP = "10.1.10.67";
const fakeIP = "192.168.1.74"
export const Hue = jsHue();
export const Bridge = Hue.bridge(fakeIP);
export const User = Bridge.user(fakeUser);

export const discover = () => {
  return Hue.discover()
}

export const createUser = (bridge) => {
  return bridge.createUser(`HueCanvas#iPad${Math.random * 100}`);
}



// export const discover = () => hue.discover(
//     function(bridges) {
//         if(bridges.length === 0) {
//             bridge_ip = "dook";
//             console.log('No bridges found. :(');
//         }
//         else {
//             bridges.forEach(function(b) {
//                 bridge_ip = b.internalipaddress;
//                 console.log('Bridge found at IP address %s.', b.internalipaddress);
//             });
//         }
//     },
//     function(error) {
//         console.error(error.message);
//     }
// );
