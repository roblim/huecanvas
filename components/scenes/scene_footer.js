import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
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

              backgroundColor: "rgba(255, 255, 255, .4)",
              height: "100%"

            }}
            isVisible={this.state.IndexModalIsOpen}
            backdropColor="rgb(255, 255, 255)"

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
            backdropColor="rgb(255, 255, 255)"

            >

            <SceneFormContainer
              hideModal={this.hideModal}
              />
            </ Modal>
            <Button
              color="black"
              onPress={() => this.openModal("index")}
              title="scenes"

              />
            <Button
              color="black"
              onPress={() => this.openModal("create")}
              title="create scene"

              />

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, .4)",
    justifyContent: "space-between"
  }
})

export default SceneFooter;




// <SceneIndexContainer />
