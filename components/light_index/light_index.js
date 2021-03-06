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
  }

	onColorChange(color) {
    this.setState({ color })
  }

	componentDidMount() {
		this.props.fetchLights(this.props.user);
	}

  render() {
		if (this.props.lights.length < 1) { return null;}
		return(
			<View style={{
					width: '100%',
					height: '100%',
					backgroundColor: '#121212',
					// justifyContent: 'space-between'
				}}>

				<View style={{padding: 20,
						flex: 3.3,
						flexWrap: 'wrap',
						alignSelf: 'center',
						width: '100%',
						// margin: 'auto',
							// height: '100%',
						// width: '60%',
						// position: 'absolute',
						// justifyContent: 'space-around',
						// alignItems: 'center',
						// alignContent: 'center',
						flexDirection: 'row'}}>
						{this.props.lights.map((light, idx) =>
							(
								<LightIndexItemContainer
									light={light}
									key={`light-${idx}`}
									/>
							)
						)}
				</View>
				<SceneFooter lights={this.props.lights}/>

		</View>
    )
  }
}

// {id: 0,
//  name: "Daddy’s",
//  lights: {
// 					1: {lightId: 1, canvasPosition: null},
// 					2: {lightId: 2, canvasPosition: null},
// 	 			 }
// }

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
