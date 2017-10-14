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
		this.state = { sliderVal: .2 }
  }

	componentWillMount() {
		this.props.fetchLights()
	}

  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'stretch', flex: 1 }}>
        <View>
					<Slider
						style={{flex: 1, marginRight: 20}}
						trackStyle={{width: 255, height: 20}}
						thumbTouchSize={{width: 40, height: 40}}
						thumbStyle={{width: 30, height: 30, borderRadius: 100, backgroundColor: '#d9d9da'}}
						minimumTrackTintColor={'#9fc5f8'}
						minimumValue={0}
						maximumValue={255}
						step={1}
				 value={this.state.sliderVal}
				 onValueChange={value => this.setState({ sliderVal: value })}
			 />
			 <Text>
				 Value: {this.state.value}
			 </Text>
        </View>
      </View>
    );
  }
}

export default NavSliders;
