import React from 'react';
import { Text,
				 View,
				 StyleSheet,
				 Button,
			   TouchableHighlight } from 'react-native';
import { xyToRGB } from '../../util/lights_util';

class LightIndexItem extends React.Component {
  constructor(props) {
    super(props)

		this.blinkLight = this.props.blinkLight.bind(this);
		this.turnLightOn = this.props.turnLightOn.bind(this);
		this.turnLightOff = this.props.turnLightOff.bind(this);
		this.turnAllLightsOff = this.props.turnAllLightsOff.bind(this);
		this.turnAllLightsOn = this.props.turnAllLightsOn.bind(this);
		this.changeBrightness = this.props.changeBrightness.bind(this);
		this.increaseBrightness = this.props.increaseBrightness.bind(this);
		this.decreaseBrightness = this.props.decreaseBrightness.bind(this);
		this.changeColor = this.props.changeColor.bind(this);
		this.changeTemperature = this.props.changeTemperature.bind(this);
		this.updateLightName = this.props.updateLightName.bind(this);
  }

  render() {
    const { user } = this.props;
		const { light } = this.props;
    return(
      <TouchableHighlight
				style={styles(light).container}
        onPress={() => this.updateLightName(user, light.lightId, 'Triple')}
        >
        <Text style={styles.welcome}>{light.name}</Text>
      </TouchableHighlight>
    )
  }
}

const styles = (light) => {
	let rgb = xyToRGB(light.state.xy, light.state.bri);
	let { red } = rgb;
	let { green } = rgb;
	let { blue } = rgb;
	return(
		StyleSheet.create({
			container: {
				// flex: 1,
				justifyContent: 'center',
				flexWrap: 'wrap',
				alignItems: 'center',
				backgroundColor: `rgb(${red}, ${green}, ${blue})`,
				width: 90,
				height: 90,
				borderRadius: 45
			}
		})
	);
};


export default LightIndexItem;
