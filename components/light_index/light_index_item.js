import React from 'react';
import { Text,
				 View,
				 StyleSheet,
				 Button,
			   TouchableHighlight,
			   Modal,
			   PanResponder,
			 	 Dimensions } from 'react-native';
import { xyToRGB } from '../../util/lights_util';
import { getRGBFromXYAndBrightness } from '../../util/color';
import LightFormContainer from './light_form_container';
import PanResponderExample from './panner';
import { ColorPicker,
				 TriangleColorPicker,
			   toHsv,
			   fromHsv } from 'react-native-color-picker';

const CIRCLE_HIGHLIGHT_COLOR = "grey";

class LightIndexItem extends React.Component {
	_panResponder = {};
	_previousLeft = 0;
	_previousTop = 0;
	_circleStyles = {};
	circle = null;

	constructor(props) {
    super(props)
		this.user = this.props.user;
		this.light = this.props.light;

		this.lightColor = getRGBFromXYAndBrightness(this.light.state.xy[0],
																								this.light.state.xy[1],
																								this.light.state.bri,
																								this.light.modelId);
		this.lightColorRGB = 	`rgb(${this.lightColor[0]},
																${this.lightColor[1]},
																${this.lightColor[2]})`;

		this.state = {
			modalVisible: false,
			oldColor: this.lightColorRGB,
			color: toHsv(this.lightColorRGB),
			lastPress: 0,
			lastCall: 0,
			numberActiveTouches: 0,
      moveX: 0,
      moveY: 0,
      x0: 0,
      y0: 0,
      dx: 0,
      dy: 0,
      vx: 0,
      vy: 0
		};

		this.onColorChange = this.onColorChange.bind(this);

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
		this.changeBrightnessAll = this.props.changeBrightnessAll.bind(this);
  }

	hexToRgbA(hex, alpha = 1) {
    let c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c = hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x'+c.join('');
        return(
					{ rgbaString: 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+  `, ${alpha})`,
						rgbObject: {
												red: (c>>16)&255,
												green: (c>>8)&255,
												blue: c&255
											 }
					}
				)
    }
	}

	onColorChange(color) {
		let rgbObject = this.hexToRgbA(fromHsv(color)).rgbObject;

		let delta = new Date().getTime() - this.state.lastCall;
		if (delta >= 120) {
			this.setState({ color });
			this.changeColor(this.user, this.light, rgbObject)
			this.setState({ lastCall: new Date().getTime() });
		}
	}

	onColorSelected(color) {
		this.setState({ oldColor: this.hexToRgbA(color).rgbaString});
		this.changeColor(this.user, this.light, this.hexToRgbA(color).rgbObject);
		this.setModalVisible(false);
	}

	onOldColorSelected(color) {
		this.setState({ color: toHsv(color) })
		this.changeColor(this.user, this.light, this.hexToRgbA(color).rgbObject);
		this.setModalVisible(false);
	}

	setModalVisible(visible) {
			this.setState({modalVisible: visible});
		}

	form() {
			return(
				<LightFormContainer light={this.props.light} />
			)
	}

	onPress(user, lightId) {
		return (
			() => {
				let delta = new Date().getTime() - this.state.lastPress;

				if (delta < 200) {
					// console.log('double tap!')
				} else {
					// console.log('blink');
					this.blinkLight(user, lightId);
				}
				this.setState({ lastPress: new Date().getTime() });
			}
		);
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
		let Window = Dimensions.get('window');
		this._previousLeft = 0;
		this._previousTop = 0;
		this._circleStyles = {
			style: { left: this._previousLeft, top: this._previousTop }
		};
	}

	componentDidMount() {
		this._updatePosition();
	}

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
						onLayout={(e) => console.log(e.nativeEvent.layout)}
						style={lightColor(light).container}>

						<TouchableHighlight
							style={lightColor(light).container}
							onLongPress={() => this.setModalVisible(true)}
							onPress={this.onPress(user, light.lightId)}>
								<View style={lightColor(light).container}>
									<Text style={{
																color: '#111111',
																fontSize: 16,
																fontWeight: 'bold',
																textAlign: 'center',
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
							<View style={{flex: 1, padding: 15, backgroundColor: 'black'}}>
								<Text style={{color: 'white',
															fontSize: 40,
															fontWeight: 'bold',
															marginTop: 15,
															marginLeft: 30
														}}>{this.light.name}</Text>
								<TriangleColorPicker
									oldColor={this.state.oldColor}
									color={this.state.color}
									onColorChange={this.onColorChange.bind(this)}
									onColorSelected={this.onColorSelected.bind(this)}
									onOldColorSelected={this.onOldColorSelected.bind(this)}
									style={{flex: 1}}
								/>
							</View>
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
				style: { backgroundColor: {CIRCLE_HIGHLIGHT_COLOR} }
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
	// let rgb = xyToRGB(light.state.xy, light.state.bri);
	let rgb = getRGBFromXYAndBrightness(light.state.xy[0],
																		  light.state.xy[1],
																			light.state.bri,
																			light.modelId);
	let red  = rgb[0];
	let green  = rgb[1];
	let blue  = rgb[2];

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
				// position: "absolute",
				margin: 10,
				left: 0,
				top: 0,

				// shadowColor: `rgb(${red}, ${green}, ${blue})`,
		    // shadowOffset: { width: 1, height: 1 },
		    // shadowOpacity: 1,
		    // shadowRadius: 6,
		    // elevation: 4,
			}
		})
	);
};

let Window = Dimensions.get('window');

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalContent: {
		width: '100%',
		height: '100%',
		backgroundColor: 'white',
		borderRadius: 5
	},
	wrapper: {
		alignSelf: 'flex-start',
	},
	lightWrapper: {
		flex:1,
		top: 0,
		bottom: 0,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		flexWrap: 'wrap'
	}
});

export default LightIndexItem
