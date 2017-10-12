import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import SceneIndex from "./scene_index";


class SceneFooter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this);

  }

  openModal() {
    this.setState({modalIsOpen: true})
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.openModal}
                title="button"
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red"
  }
})

export default SceneFooter;
