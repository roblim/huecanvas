import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import Swipeout from "react-native-swipeout";
import SceneFormContainer from "./scene_form_container";
import Modal from "react-native-modal";

class SceneIndexItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    }

    this.buttons = [
      {
        text: "Edit",
        backgroundColor: "green",
        onPress: () => {
          setTimeout(() => {
            this.openModal()
          }, 1000);
          this.hideModal();
        }
      },
      {
        text: 'Delete',
        backgroundColor: "red",
        onPress: () => {
          this.props.deleteScene(this.id);
        }
      }
    ]

    this.id = Object.keys(props.item.item)[0];

    this.openModal = this.openModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true})
  }

  hideModal() {
    this.setState({modalIsOpen: false})
  }

  render() {
    const scene = this.props.item.item[this.id];
    return (

      <View style={{
      flex: 1,
      backgroundColor     : "rgba(33, 33, 33, .4)",
      justifyContent: "center",
      alignItems: 'center',
    }}

      >

      <Swipeout
        right={this.buttons}
        style={{
          backgroundColor: "transparent",
          width: "100%"}}
        >
      <Text
              style={{
                padding: 10,
                fontSize: 30,
                flex: 1,
                color: "white",
                textAlign: "center"}}
              onPress={() => {
                this.props.fetchScene(this.id)
                this.props.setScene(this.id)
                this.props.displayScene(scene.name)
              }}
       >{scene.name}</Text>
   </Swipeout>

      <Modal
        style={{
          backgroundColor: "rgba(33, 33, 33, .4)"
        }}
        isVisible={this.state.modalIsOpen}
        backdropColor="rgb(33, 33, 33)"
        >
        <SceneFormContainer
          hideModal={this.hideModal}
          scene={scene}
          />
      </Modal>
      </ View>
    )
  }

}


export default SceneIndexItem;
