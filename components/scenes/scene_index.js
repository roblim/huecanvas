import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import SceneIndexItem from "./scene_index_item";
let count = 0;
class SceneIndex extends React.Component {
  constructor(props) {
    super(props);

    console.log(props.scenes);

    this.state = {
      currentScene: ""
    }
    console.log(this.props.scenes);
    this.setScene = this.setScene.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.displayScene = this.displayScene.bind(this);
    this.deleteScene = this.deleteScene.bind(this);
  }

  componentWillMount() {
    this.props.fetchScenes()
  }

  displayScene(scene) {
    this.setState({currentScene: scene})
  }

  renderItem(scene) {

    let color;
    if (sceneColors[scene.item.name]) {
      console.log("here");
      color = sceneColors[scene.item.name]
    } else {
      color = "#b35858"
    }

      return (
      <SceneIndexItem item={scene}
        style={{padding: 50}}
                      color={color}
                      key={scene.index}
                      setScene={this.props.setScene}
                      displayScene={this.displayScene}
                      fetchScene={this.props.fetchScene}
                      deleteScene={this.deleteScene}
                      hideModal={this.props.hideModal}
                      openModal={this.props.openModal}
                      />
    )
  }

  deleteScene(idx) {
    console.log(idx);
    console.log("before", this.props.scenes);
    this.props.scenes.splice(idx, 1);
    this.props.hideModal("index");
    console.log("after", this.props.scenes);
  }

  setScene(name) {
    this.setState({currentScene: name})
  }

  render() {

    return (
      <View
        style={{flex: -1}}
        >
          <Text style={{backgroundColor:"rgba(33, 33, 33, .4)", color: "white"}}>Scenes</Text>
          <Text style={{fontSize: 20, color: "white", backgroundColor: "rgba(33, 33, 33, .4)"}}>
            Current Scene: {this.state.currentScene}
          </Text>
        <FlatList
          data={this.props.scenes}
          renderItem={this.renderItem}
          />

        <Button
          color= "white"
          title="close"
          onPress={() => this.props.hideModal("index")}
          />

      </ View>

    )
  }

}

export default SceneIndex;

const styles = StyleSheet.create({
});

const sceneColors = {
  "Margriet": "#FED38B",
  1: "#EEDB66",
  3: "#8FCADC",
  4: "#FFFFFF",
  5: "#906F43",
  6: "#9B4D23",
  7: "#F47A49 ",
  8: "#F5AF74",
  9: "#189A95",
  10: "rgb(233, 175, 189)",
  11: "rgb(59, 92, 181)",
  12: "rgb(238, 219, 102)",
  13: "rgb(239, 224, 59)",
  14: "#FEF696",
  "default": "teal"
}
