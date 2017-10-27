import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import SceneIndexItem from "./scene_index_item";
let count = 0;
class SceneIndex extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      currentScene: ""
    }
    this.setScene = this.setScene.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.displayScene = this.displayScene.bind(this);
  }

  componentWillMount() {
    this.props.fetchScenes()
  }

  displayScene(scene) {
    this.setState({currentScene: scene})
  }

  renderItem(scene) {
    let color;
    if (scene.index < 15) {
      color = itemColors[scene.index]
    } else {
      color = itemColors["default"]
    }

      return (
      <SceneIndexItem item={scene}
                      key={scene.index}
                      setScene={this.props.setScene}
                      displayScene={this.displayScene}
                      fetchScene={this.props.fetchScene}
                      />
    )
  }

  setScene(name) {
    this.setState({currentScene: name})
  }

  render() {

    return (
      <View>
          <Text style={{backgroundColor:"rgba(255, 255, 255, .4)", color: "black"}}>Scenes</Text>
          <Text style={{fontSize: 20, color: "black", backgroundColor: "rgba(255, 255, 255, .4)"}}>
            Current Scene: {this.state.currentScene}
          </Text>
        <FlatList
          contentContainerStyle={styles.list}
          data={this.props.scenes}
          renderItem={this.renderItem}
          />

        <Button
          color= "black"
          title="close"
          onPress={() => this.props.hideModal("index")}
          />

      </ View>

    )
  }

}

export default SceneIndex;

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    justifyContent: "space-between",
    flexWrap: 'wrap',
  }
});

const itemColors = {
  0: "#FED38B",
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
