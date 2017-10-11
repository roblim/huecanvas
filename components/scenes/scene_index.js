import React from "react";
import { View, Text, ListView } from "react-native";
import SceneIndexItem from "./scene_index_item";

class SceneIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <ListView
          dataSource={this.props.scenes}
          renderRow={(scene) => <SceneIndexItem scene={scene} />}
          />
      </ View>
    )
  }

}

export default SceneIndex;
