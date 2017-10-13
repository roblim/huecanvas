import React from "react";
import { View, Text, FlatList, Button } from "react-native";
import SceneIndexItem from "./scene_index_item";

class SceneIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScene: ""
    }
    this.setScene = this.setScene.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(scene) {
    return (
      <SceneIndexItem item={scene}
                      setScene={this.setScene}
                      fetchScene={this.props.fetchScene}
                      />
    )
  }

  setScene(name) {
    console.log("click heard");
    console.log(this.props);
    this.setState({currentScene: name})
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
          Current Scene: {this.state.currentScene}
        </Text>

        <Button title="getScenes"
                onPress={() => this.props.fetchScenes()}
          />
      </ View>

    )
  }

}

export default SceneIndex;
