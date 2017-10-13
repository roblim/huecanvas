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

    console.log(this.state.currentScene);

    console.log(props.scenes[this.state.currentScene][this.state.currentScene].name);

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
        <Text style={{fontSize: 20, color: "white", backgroundColor: "maroon", marginBottom: 100}}>
          Current Scene: {this.props.scenes[this.state.currentScene][this.state.currentScene].name}
        </Text>
      </ View>

    )
  }

}

export default SceneIndex;
