import jsHue from "jshue";
import jsHueAPI from "jshue";

let hue = jsHue();
let api = jsHueAPI();
let bridge_ip;

hue.discover(
    function(bridges) {
        if(bridges.length === 0) {
            bridge_ip = "dook";
            console.log('No bridges found. :(');
        }
        else {
            bridges.forEach(function(b) {
                bridge_ip = b.internalipaddress;
                console.log('Bridge found at IP address %s.', b.internalipaddress);
            });
        }
    },
    function(error) {
        console.error(error.message);
    }
);

console.log(bridge_ip);

export const bridgeIP = '192.168.1.234';

export const bridge = hue.bridge(bridge_ip)
console.log(bridge);

let data = {"devicetype": "HueCanvas#admin"}
let test;

export const userName = () => bridge.createUser("HueCanvas#admin").then((user) => {
  test = user;
});
