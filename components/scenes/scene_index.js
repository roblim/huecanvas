import React from "react";
import { View, Text, FlatList, Button } from "react-native";
import SceneIndexItem from "./scene_index_item";
let count = 0;
class SceneIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScene: ""
    }
    this.setScene = this.setScene.bind(this);
    this.renderItem = this.renderItem.bind(this);

    console.log(count+= 1);
    console.log(props);
  }

  componentWillMount() {
    this.props.fetchScenes();
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

      </ View>

    )
  }

}

export default SceneIndex;


// <Button title="getScenes"
//   onPress={() => this.props.fetchScenes()}
//   />
