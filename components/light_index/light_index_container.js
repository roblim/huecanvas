import { connect } from 'react-redux';
import React from 'react';
import { Text,
				 View,
				 StyleSheet,
				 Button,
			   TouchableHighlight } from 'react-native';
import jsHue from 'jshue';
import { blinkLight } from '../../util/light_api_util';

const Hue = jsHue();
const Bridge = Hue.bridge('192.168.1.234');
const User = Bridge.user("VJw19b5u6kZ2kWx8C5AqnaYe2eDS-kI2y8RHlL2o");

const state = {
  entities: {
    lights: User.getLights().then(r => console.log(r))
  },
  admin: {
    bridge: Bridge,
    user: User,
    bridgeIP: '192.168.1.234'
  }
};

export default class LightIndexContainer extends React.Component {
  constructor(props) {
    super(props);
    this.hue = jsHue();
    this.bridge = this.hue.bridge('192.168.1.234');
    this.user = this.bridge.user("VJw19b5u6kZ2kWx8C5AqnaYe2eDS-kI2y8RHlL2o");
    this.lights = this.user.getLights().then(r => console.log(r));
    this.bridgeIp = '192.168.1.234';

    this.state = {
      lights: this.lights
    }
		this.setLightOff = this.setLightOff.bind(this);
		this.setLightOn = this.setLightOn.bind(this);
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

	setLightOff() {
		let lightId = 8;
		this.user.setLightState(
			lightId,
			{
				on: false
			}
		).then(data => console.log(data));
	}

	setLightOn() {
		let lightId = 8;
		this.user.setLightState(
			lightId,
			{
				on: true
			}
		).then(data => console.log(data));
	}

  sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  blink() {
    for (let i = 0; i < 1000; i++) {
      let status;
      (i % 2 !== 0) ? (status = true) : (status = false);
      this.sleep(10000).then(() =>
        this.user.setLightState(
          8,
          {
            on: status,
            transitiontime: 0
          }
        )
      );
    }
  }

  test() {
  }

  render() {
    return (
			<View>
      <TouchableHighlight
				style={styles.container}
        onPress={blinkLight.bind(null, state, 8)}
        >
        <Text style={styles.welcome}>Blink</Text>
      </TouchableHighlight>

      <TouchableHighlight
				style={styles.container}
        onPress={this.setLightOn}
        >
        <Text style={styles.welcome}>On</Text>
      </TouchableHighlight>

      <TouchableHighlight
				style={styles.container}
        onPress={this.setLightOff}
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
