import React from "react";
import { View, Text, FlatList } from "react-native";
import SceneIndexItem from "./scene_index_item";

class SceneIndex extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  renderItem(scene) {
    return (
      <SceneIndexItem item={scene} />
    )
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.scenes}
          renderItem={this.renderItem}
          />
      </ View>

    )
  }

}

export default SceneIndex;
