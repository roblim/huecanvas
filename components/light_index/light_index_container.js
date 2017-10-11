import { connect } from 'react-redux';
import React from 'react';
import { Text,
				 View,
				 StyleSheet,
				 Button,
			   TouchableHighlight } from 'react-native';
import jsHue from 'jshue';
import { blinkLight, setLightOff, setLightOn } from '../../util/light_api_util';

const appAcademyHue = "VJw19b5u6kZ2kWx8C5AqnaYe2eDS-kI2y8RHlL2o";
const homeHue = '54gEGoS1LxdOnFSk3fWMfMa7sQYUi76ERzWRGhZs';
const appAcademyIP = '192.168.1.234';
const homeIP = '10.1.10.67'
const Hue = jsHue();
const Bridge = Hue.bridge(homeIP);
const User = Bridge.user(homeHue);

const state = {
  entities: {
    lights: User.getLights().then(r => console.log(r))
  },
  admin: {
    bridge: Bridge,
    user: User,
    bridgeIP: homeIP
  }
};

export default class LightIndexContainer extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
		let hue = jsHue();
		hue.discover().then(bridges => {
    if(bridges.length === 0) {
        console.log('No bridges found. :(');
    }
    else {
        bridges.forEach(b => console.log('Bridge found at IP address %s.', b.internalipaddress));
    }
	}).catch(e => console.log('Error finding bridges', e));
  }

	// setLightOff() {
	// 	let lightId = 8;
	// 	this.user.setLightState(
	// 		lightId,
	// 		{
	// 			on: false
	// 		}
	// 	).then(data => console.log(data));
	// }

	// setLightOn() {
	// 	let lightId = 8;
	// 	this.user.setLightState(
	// 		lightId,
	// 		{
	// 			on: true
	// 		}
	// 	).then(data => console.log(data));
	// }

  render() {
    return (
			<View>
      <TouchableHighlight
				style={styles.container}
        onPress={blinkLight.bind(null, state.admin.user, 2)}
        >
        <Text style={styles.welcome}>Blink</Text>
      </TouchableHighlight>

      <TouchableHighlight
				style={styles.container}
        onPress={setLightOn.bind(null, state.admin.user, 2)}
        >
        <Text style={styles.welcome}>On</Text>
      </TouchableHighlight>

      <TouchableHighlight
				style={styles.container}
        onPress={setLightOff.bind(null, state.admin.user, 2)}
        >
        <Text style={styles.welcome}>Off</Text>
      </TouchableHighlight>
			</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    width: 200,
    height: 200,
		borderRadius: 100
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
		color: 'teal',
		fontWeight: 'bold'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
