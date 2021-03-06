import { connect } from 'react-redux';
import React from 'react';
import { Text,
				 View,
				 StyleSheet,
				 Button,
			   TouchableHighlight } from 'react-native';
import jsHue from 'jshue';
import { blinkLight,
				 setLightOff,
				 setLightOn,
			   incBri,
			 	 decBri,
			   setBri,
			   setAllLightsOff,
			 	 setAllLightsOn,
			 	 setLightColor,
			   setMiredTemperature,
			   putLightName,
			 	 setBriAll} from '../../util/lights_util';

const appAcademyHue = "VJw19b5u6kZ2kWx8C5AqnaYe2eDS-kI2y8RHlL2o";
const homeHue = '54gEGoS1LxdOnFSk3fWMfMa7sQYUi76ERzWRGhZs';
const appAcademyIP = '192.168.1.234';
const homeIP = '10.1.10.67'
const Hue = jsHue();
const Bridge = Hue.bridge(homeIP);
const User = Bridge.user(appAcademyHue);

const state = {
  entities: {
		lights: ""
    // lights: User.getLights().then(r => console.log(r))
  },
  admin: {
    bridge: Bridge,
    user: User,
    bridgeIP: homeIP
  }
};

export default class TestComponent extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
		// debugger;
	// 	let hue = jsHue();
	// 	hue.discover().then(bridges => {
  //   if(bridges.length === 0) {
  //       console.log('No bridges found. :(');
  //   }
  //   else {
  //       bridges.forEach(b => console.log('Bridge found at IP address %s.', b.internalipaddress));
  //   }
	// }).catch(e => console.log('Error finding bridges', e));
  }

  render() {
    return (
			<View style={{flexDirection: 'row', flexWrap: 'wrap', width: 500, top: 500, left: 0}}>
      <TouchableHighlight
				style={styles.container}
        onPress={setBriAll.bind(null, state.admin.user, 255)}
        >
        <Text style={styles.welcome}>Set All Brightness</Text>
      </TouchableHighlight>

      <TouchableHighlight
				style={styles.container}
        onPress={putLightName.bind(null, state.admin.user, 8, "Bloorg!")}
        >
        <Text style={styles.welcome}>Update Name</Text>
      </TouchableHighlight>

      <TouchableHighlight
				style={styles.container}
        onPress={setLightOn.bind(null, state.admin.user, 8)}
        >
        <Text style={styles.welcome}>On</Text>
      </TouchableHighlight>

      <TouchableHighlight
				style={styles.container}
        onPress={setLightOff.bind(null, state.admin.user, 8)}
        >
        <Text style={styles.welcome}>Off</Text>
      </TouchableHighlight>

			<TouchableHighlight
				style={styles.container}
			  onPress={setAllLightsOn.bind(null, state.admin.user)}
			  >
			  <Text style={styles.welcome}>All On</Text>
			</TouchableHighlight>

			<TouchableHighlight
				style={styles.container}
			  onPress={setAllLightsOff.bind(null, state.admin.user)}
			  >
			  <Text style={styles.welcome}>All Off</Text>
			</TouchableHighlight>

			<TouchableHighlight
				style={styles.container}
			  onPress={setLightColor.bind(null, state.admin.user, 8, { red: 150, green: 223, blue: 50 })}
			  >
			  <Text style={styles.welcome}>Set Color</Text>
			</TouchableHighlight>

			<TouchableHighlight
				style={styles.container}
			  onPress={incBri.bind(null, state.admin.user, 8, 25)}
			  >
			  <Text style={styles.welcome}>Brighter</Text>
			</TouchableHighlight>

			<TouchableHighlight
				style={styles.container}
			  onPress={decBri.bind(null, state.admin.user, 8, 25)}
			  >
			  <Text style={styles.welcome}>Dimmer</Text>
			</TouchableHighlight>

			</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
		flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: 'pink',
    width: 90,
    height: 90,
		borderRadius: 45
  },
  welcome: {
    fontSize: 20,
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



//
// <TouchableHighlight
// 	style={styles.container}
//   onPress={setBri.bind(null, state.admin.user, 8, 254)}
//   >
//   <Text style={styles.welcome}>Set Bri</Text>
// </TouchableHighlight>
//
//

//
// <TouchableHighlight
// 	style={styles.container}
//   onPress={setLightColor.bind(null, state.admin.user, 8, { red: 150, green: 223, blue: 50 })}
//   >
//   <Text style={styles.welcome}>Set Color</Text>
// </TouchableHighlight>
//
// <TouchableHighlight
// 	style={styles.container}
//   onPress={setMiredTemperature.bind(null, state.admin.user, 8, 400)}
//   >
//   <Text style={styles.welcome}>Set Temp</Text>
// </TouchableHighlight>
