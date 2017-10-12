import jsHue from "jshue";
import jsHueAPI from "jshue";

let hue = jsHue();
let bridge_ip;

export const discover = () => hue.discover(
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


export const bridgeIP = '192.168.1.234';
export const bridge = hue.bridge(bridgeIP);

let username;
// create user account (requires link button to be pressed)
bridge.createUser('foo application', function(data) {
    // extract bridge-generated username from returned data
    username = data[0].success.username;

    console.log('New username:', username);

});
// instantiate user object with username
export const user = bridge.user(username);

console.log(username);
