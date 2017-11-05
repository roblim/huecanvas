import React from 'react';
import LightIndexItemContainer from './light_index_item_container';
import TestComponent from './test_component';
import { Text,
				 View,
				 StyleSheet,
				 Button,
				 ScrollView,
			   TouchableHighlight } from 'react-native';
import { ColorPicker,
				 TriangleColorPicker,
			   toHsv,
			   fromHsv } from 'react-native-color-picker';
import PanResponderExample from './panner';
import SceneFooter from "../scenes/scene_footer";

class LightIndex extends React.Component {
  constructor(props) {
    super(props)
		this.state = { color: toHsv('green') }
		this.onColorChange = this.onColorChange.bind(this)
		this.getX = this.getX.bind(this)
		this.getY = this.getY.bind(this)
  }

	onColorChange(color) {
    this.setState({ color })
  }

	componentDidMount() {
		this.props.fetchLights(this.props.user);
	}

	getX(lightId) {
		if (Object.keys(this.props.lightPositions).length < 1) {
			return 0
		}
		if (!this.props.lightPositions[lightId]) { return 0; }
		return this.props.lightPositions[lightId].x;
	}

	getY(lightId) {
		if (Object.keys(this.props.lightPositions).length < 1) {
			return 0
		}
		if (!this.props.lightPositions[lightId]) { return 0; }
		return this.props.lightPositions[lightId].y;
	}

  render() {
		if (this.props.lights.length < 1) { return null;}
		return(
			<View style={{
					width: '100%',
					height: '100%',
					backgroundColor: '#121212'
				}}>

				<View style={{padding: 20,
						flex: 3.3,
						flexWrap: 'wrap',
						alignSelf: 'center',
						width: '100%',
						flexDirection: 'row'}}>
						{this.props.lights.map((light, idx) =>
							(
								<LightIndexItemContainer
									light={light}
									key={`light-${idx}`}
									xPos={this.getX(light.lightId)}
									yPos={this.getY(light.lightId)}
									/>
							)
						)}
				</View>
				<SceneFooter lights={this.props.lights}/>

		</View>
    )
  }
}

export default LightIndex;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
// 		paddingTop: 50,
//     justifyContent: 'center',
// 		alignContent: 'center',
// 		flexWrap: 'wrap',
//     alignItems: 'center',
//     backgroundColor: 'pink',
//     width: 90,
//     height: 90,
// 		borderRadius: 45,
//   },
// });
