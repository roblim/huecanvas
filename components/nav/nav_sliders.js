import React from 'react';
import { Text,
				 View,
				 StyleSheet,
				 Switch } from 'react-native';
import Slider from "react-native-slider";

class NavSliders extends React.Component {
  constructor(props) {
    super(props)
		this.turnAllLightsOff = this.props.turnAllLightsOff.bind(this);
		this.turnAllLightsOn = this.props.turnAllLightsOn.bind(this);
		this.changeBrightnessAll = this.props.changeBrightnessAll.bind(this)
		this.state = {user: this.props.user, sliderVal: 0, lastCall: 0, globalOn: true }
  }

	componentWillMount() {
		// this.props.fetchLights()
	}

	componentDidMount() {
		// console.log(this.props.user);
	}
// light.state.bri
// if light.reachable?

	determineInitialBrightness() {

	}

	handleSwitchChange(value) {
		this.setState({ user: this.props.user, sliderVal: this.state.sliderVal, lastCall: this.state.lastCall, globalOn: value })
		switch (value) {
			case true :
				return this.props.turnAllLightsOn(this.props.user)
				console.log(value);
			case false :
				return this.props.turnAllLightsOff(this.props.user)
				console.log(value);
			default:
				console.log(value);
		}
	}

	handleSlideChange(value) {
		let delta = new Date().getTime() - this.state.lastCall;
		if (delta >= 150) {
			this.setState({ user: this.props.user, sliderVal: value, lastCall: new Date().getTime(), globalOn: true });
			console.log(this.state);
			this.changeBrightnessAll(this.state.user, this.state.sliderVal)
		}
	}

  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'stretch', flex: 1 }}>
				<View>
					<Slider
						style={{flex: 1, marginRight: 20, marginTop: -10}}
						trackStyle={{width: 255, height: 20}}
						thumbTouchSize={{width: 40, height: 40}}
						thumbStyle={{width: 30, height: 30, borderRadius: 100, backgroundColor: 'white'}}
						minimumTrackTintColor={'#9fc5f8'}
						minimumValue={0}
						maximumValue={255}
						step={1}
						value={this.state.sliderVal}
						onValueChange={value => this.handleSlideChange(value)}
			 	 />
			 </View>
			 <Switch
				 onValueChange={(value) => this.handleSwitchChange(value)}
				 style={{marginRight: 20}}
				 value={this.state.globalOn} />
    </View>
    );
  }
}

export default NavSliders;
