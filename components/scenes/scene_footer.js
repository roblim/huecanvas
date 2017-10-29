import React from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import SceneIndex from "./scene_index";
import Modal from "react-native-modal";
import SceneIndexContainer from "./scene_index_container";
import SceneFormContainer from "./scene_form_container";

class SceneFooter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      IndexModalIsOpen: false,
      CreateModalIsOpen: false
    }

    this.openModal = this.openModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  hideModal(type) {
    if (type === "index") {
      this.setState({IndexModalIsOpen: false})
    } else {
      this.setState({CreateModalIsOpen: false})
    }
  }

  openModal(type) {
    if (type === "index") {
      this.setState({IndexModalIsOpen: true})
    } else {
      this.setState({CreateModalIsOpen: true})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Modal
            style={{

              backgroundColor: "rgba(33, 33, 33, .4)",
              height: "100%"

            }}
            isVisible={this.state.IndexModalIsOpen}
            backdropColor="rgb(33, 33, 33)"

            >
            <SceneIndexContainer
              hideModal={this.hideModal}
              />
            </ Modal>
          <Modal
            style={{
              backgroundColor: "white"

            }}
            isVisible={this.state.CreateModalIsOpen}
            backdropColor="rgb(33, 33, 33)"

            >

            <SceneFormContainer
              hideModal={this.hideModal}
              />
            </ Modal>
            <Button
              color="white"
              onPress={() => this.openModal("index")}
              title="Scenes"

              />
            <Button
              color="white"
              onPress={() => this.openModal("create")}
              title="Create Scene"

              />

        </View>
      </View>
    )
  }
}
let Window = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    justifyContent: "space-between",
    flex: 1
  }
})

export default SceneFooter;




// <SceneIndexContainer />
