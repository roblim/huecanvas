import React from 'react';
import { View, Text } from 'react-native';
import SceneIndexContainer from "../scenes/scene_index_container";
import SceneFooter from "../scenes/scene_footer";

export default class RoomTemp extends React.Component {
  render() {
    return (
			<View>
        <Text>Room Temp!</ Text>
        <SceneFooter />
			</View>
    );
  }
}
