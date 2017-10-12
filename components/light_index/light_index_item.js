import React from 'react';
import { Text,
				 View,
				 StyleSheet,
				 Button,
			   TouchableHighlight } from 'react-native';

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
  }

  render() {
    const { user } = this.props;
		const { light } = this.props;
    return(
      <TouchableHighlight
				style={styles.container}
        onPress={() => this.blinkLight(user, light.lightId)}
        >
        <Text style={styles.welcome}>{light.name}</Text>
      </TouchableHighlight>
    )
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

export default LightIndexItem;
