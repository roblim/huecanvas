import React from 'react';
import { Text,
				 View,
				 StyleSheet,
				 Button,
			   TouchableHighlight,
			   Modal,
			   PanResponder} from 'react-native';
import { xyToRGB } from '../../util/lights_util';
import LightFormContainer from './light_form_container';
import PanResponderExample from './panner';

const CIRCLE_HIGHLIGHT_COLOR = "grey";

class LightIndexItem extends React.Component {
	_panResponder = {};
	_previousLeft = 0;
	_previousTop = 0;
	_circleStyles = {};
	circle = null;

	constructor(props) {
    super(props)

		this.lightColor = xyToRGB(this.props.light.state.xy, this.props.light.state.bri);
		this.lightColorRGB = `rgba(${this.lightColor.red},
			 												${this.lightColor.green},
															${this.lightColor.blue},
															0.3)`;

		this.state = {
			modalVisible: false,
			numberActiveTouches: 0,
      moveX: 0,
      moveY: 0,
      x0: 0,
      y0: 0,
      dx: 0,
      dy: 0,
      vx: 0,
      vy: 0
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

	componentWillMount() {
		this._panResponder = PanResponder.create({
			onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
			onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
			onPanResponderGrant: this._handlePanResponderGrant,
			onPanResponderMove: this._handlePanResponderMove,
			onPanResponderRelease: this._handlePanResponderEnd,
			onPanResponderTerminate: this._handlePanResponderEnd
		});
		this._previousLeft = 20;
		this._previousTop = 84;
		this._circleStyles = {
			style: { left: this._previousLeft, top: this._previousTop }
		};
	}

	componentDidMount() {
		this._updatePosition();
	}

	// onLongPress={() => this.setModalVisible(true)}

  render() {
    const { user } = this.props;
		const { light } = this.props;
    return(
			<View style={styles.wrapper}>
		      <View
						ref={circle => {
	            this.circle = circle;
	          }}
						{...this._panResponder.panHandlers}
						style={lightColor(light).container}
		        onPress={() => this.blinkLight(user, light.lightId)}>

						<TouchableHighlight
							style={lightColor(light).container}
							onPress={() => this.blinkLight(user, light.lightId)}>
								<View style={lightColor(light).container}>
									<Text style={{
																color: '#98a4ba',
																fontSize: 16,
																fontWeight: 'bold',
																textAlign: 'center'
															}}>
										{this.props.light.name}
									</Text>
								</View>
						</TouchableHighlight>

					</View>

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

	_highlight = () => {
		this.circle &&
			this.circle.setNativeProps({
				style: { backgroundColor: CIRCLE_HIGHLIGHT_COLOR }
			});
	};

	_unHighlight = () => {
		this.circle &&
			this.circle.setNativeProps({ style: { backgroundColor: this.lightColorRGB } });
	};

	// We're controlling the circle's position directly with setNativeProps.
	_updatePosition = () => {
		this.circle && this.circle.setNativeProps(this._circleStyles);
	};

	_handleStartShouldSetPanResponder = (event, gestureState) => {
		// Should we become active when the user presses down on the circle?
		// return true;
	};

	_handleMoveShouldSetPanResponder = (event, gestureState) => {
		// Should we become active when the user moves a touch over the circle?
		if (gestureState.numberActiveTouches === 1) {
			return true; } else { return false; }
	};

	_handlePanResponderGrant = (event, gestureState) => {
		this._highlight();
	};

	_handlePanResponderMove = (event, gestureState) => {
		this.setState({
			stateID: gestureState.stateID,
			moveX: gestureState.moveX,
			moveY: gestureState.moveY,
			x0: gestureState.x0,
			y0: gestureState.y0,
			dx: gestureState.dx,
			dy: gestureState.dy,
			vx: gestureState.vx,
			vy: gestureState.vy,
			numberActiveTouches: gestureState.numberActiveTouches
		});

		// Calculate current position using deltas
		this._circleStyles.style.left = this._previousLeft + gestureState.dx;
		this._circleStyles.style.top = this._previousTop + gestureState.dy;
		this._updatePosition();
	};

	_handlePanResponderEnd = (event, gestureState) => {
		this._unHighlight();
		this._previousLeft += gestureState.dx;
		this._previousTop += gestureState.dy;
	};
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
				backgroundColor: `rgba(${red}, ${green}, ${blue}, 0.3)`,
				width: 110,
				height: 110,
				borderRadius: 55,
				// position: "absolute",
				// left: 0,
				// top: 0
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
	},
	wrapper: {
		// flex: 1,
		alignSelf: 'flex-start'
	}
});

export default LightIndexItem
