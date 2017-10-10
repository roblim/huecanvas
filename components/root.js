import React from 'react';
import { View, Text } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import SceneIndexContainer from "./scenes/scene_index_container";
import DiscoverContainer from "./discover/discover_container";

export default class Root extends React.Component {
  render() {
    return (
			<View>
				<Text>This is a test</Text>
          <SceneIndexContainer />

			</View>
    );
  }
}
