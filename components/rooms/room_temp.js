import React from 'react';
import { View, Text } from 'react-native';
import SceneIndexContainer from "../scenes/scene_index_container";

export default class RoomTemp extends React.Component {
  render() {
    return (
			<View>
      <SceneIndexContainer />
				<Text>This is a test</ Text>
			</View>
    );
  }
}
