import React from 'react';
import { Text,
				 View,
				 StyleSheet,
				 Button,
			   TouchableHighlight,
			   Modal } from 'react-native';
import { xyToRGB } from '../../util/lights_util';
import LightFormContainer from './light_form_container';
import PanResponderExample from './panner';

class LightIndexItem extends React.Component {
  constructor(props) {
    super(props)

		this.state = {
			modalVisible: false
		}

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

	setModalVisible(visible) {
			this.setState({modalVisible: visible});
		}

	form() {
			return(
				<LightFormContainer light={this.props.light} />
			)
	}

  render() {
    const { user } = this.props;
		const { light } = this.props;
    return(
			<View>
	      <TouchableHighlight
					style={lightColor(light).container}
	        onPress={() => this.blinkLight(user, light.lightId)}
					onLongPress={() => this.setModalVisible(true)}
	        >
					<Text style={{
												color: 'white',
												fontSize: 16,
												fontWeight: 'bold'
											}}>{this.props.light.name}</Text>
	      </TouchableHighlight>

				<View>
	        <Modal
	          animationType="fade"
	          transparent={true}
	          visible={this.state.modalVisible}
	          onRequestClose={() => {alert("Modal has been closed.")}}

	          >
	         <View style={styles.modalContainer}>
	          <View style={styles.modalContent}>
							{this.form()}

	            <TouchableHighlight onPress={() => {
	              this.setModalVisible(!this.state.modalVisible)
	            }}>
	              <Text>Hide Modal</Text>
	            </TouchableHighlight>

	          </View>
	         </View>
	        </Modal>

      </View>
			</View>
    )
  }
}

const lightColor = (light) => {
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
				width: 110,
				height: 110,
				borderRadius: 55,
			}
		})
	);
};

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalContent: {
		width: 200,
		height: 100,
		backgroundColor: 'white',
		borderRadius: 5,
		padding: 10
	}
});

export default LightIndexItem
