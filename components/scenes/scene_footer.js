import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import SceneIndex from "./scene_index";
import Modal from "react-native-modal";
import SceneIndexContainer from "./scene_index_container";

class SceneFooter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  hideModal() {
    this.setState({modalIsOpen: false})
  }

  openModal() {
    console.log("heard");
    this.setState({modalIsOpen: true})
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Modal
            style={{
              flex: 1,
              justifyContent: "center",
              margin: "auto",
              backgroundColor: "white"

            }}
            isVisible={this.state.modalIsOpen}
            backdropColor="rgb(255, 255, 255)"

            >
            <Text>ScenesFooter</Text>
            
            <SceneIndexContainer
              hideModal={this.hideModal}
              />
            </ Modal>
            <Button onPress={() => this.openModal()}
              title="scenes"

              />

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    justifyContent: 'space-between'
  }
})

export default SceneFooter;




// <SceneIndexContainer />
