import React from "react";
import { View, Text, FlatList } from "react-native";
import SceneIndexItem from "./scene_index_item";

class SceneIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScene: 0
    }
    this.setScene = this.setScene.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(scene) {
    return (
      <SceneIndexItem item={scene}
                      setScene={this.setScene}
                      />
    )
  }

  setScene(id) {
    console.log("click heard");
    this.setState({currentScene: id})
    console.log(this.state);
  }

  render() {
    return (
      <View>
              <Text style={{backgroundColor:"maroon", color: "white"}}>Scenes</Text>
        <FlatList
          data={this.props.scenes}
          renderItem={this.renderItem}
          />
        <Text>Current Scene: {this.state.currentScene}</Text>
      </ View>

    )
  }

}

export default SceneIndex;
