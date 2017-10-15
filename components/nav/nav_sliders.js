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
		this.state = {user: this.props.user, sliderVal: -1, lastCall: 0, globalOn: true }
  }

	componentWillMount() {
		this.props.fetchLights()
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
		if (this.state.sliderVal == -1) {
			let total = 0
			nextProps.lights.forEach(light => {
				if (light.state.reachable) {
					total += light.state.bri
				}
			})
			this.setState({user: this.props.user, sliderVal: (total / nextProps.lights.length), lastCall: 0, globalOn: true });
		}
	}
// light.state.bri
// if light.reachable?

	determineInitialBrightness() {
		if (this.lights) this.lights.forEach(light => console.log(light))
	}

	handleSwitchChange(value) {
		this.setState({ user: this.props.user, sliderVal: this.state.sliderVal, lastCall: this.state.lastCall, globalOn: value })
		switch (value) {
			case true :
				return this.props.turnAllLightsOn(this.props.user)
			case false :
				return this.props.turnAllLightsOff(this.props.user)
			default:
				console.log('wtf');
		}
	}

	handleSlideChange(value) {
		let delta = new Date().getTime() - this.state.lastCall;
		if (delta >= 150) {
			if (this.state.globalOn == false) {
				this.turnAllLightsOn(this.state.user)
			}
			this.setState({ user: this.props.user, sliderVal: value, lastCall: new Date().getTime(), globalOn: true });
			this.changeBrightnessAll(this.state.user, this.state.sliderVal)
		}
	}

  render() {
		// this.determineInitialBrightness()
		// console.log(this.props.user);
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
