import React from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";
import Modal from "react-native-modal";
import { FormLabel } from "react-native-elements";
import { TriangleColorPicker, ColorPicker } from "react-native-color-picker";


class SceneForm extends React.Component {
  constructor(props) {
    super(props);

    console.log("proops", this.props);

    this.state = {
      text: "",
      modalIsOpen: false,
      selectedColor: "rgb(240, 240, 240)",
      scene: {
        "name": "",
        "lights": "",
        "recycle": "",
        "picture": ""
      }
     }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.renderForm = this.renderForm.bind(this);
    console.log("scene form props: ", this.props);
  }

  openModal() {
    this.setState({modalIsOpen: true})
  }

  closeModal() {
    this.setState({modalIsOpen: false})
  }

  handleSelect(event) {
    console.log(event);
    this.setState({selectedColor: event});
    this.closeModal();
  }


  renderForm() {

    console.log("here");

    if (this.props.formType === "create") {

      console.log("create");

      return (
        <View>
          <Text style={{
            color: "white",
            fontSize: 25,
            marginBottom: 20}}>Save current scene as: </Text>

      <TextInput
        style={{borderColor: "red",
          backgroundColor: "rgb(230, 230, 230)",
          paddingLeft: 5,
          height: 50
        }}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        placeholder="scene name"
        />

      <Button
        color="white"
        title="Select Color"
        onPress={this.openModal}
        />
      <View style={{backgroundColor     : this.state.selectedColor,
        marginLeft: 20,
        width               : 60*2,
        height              : 60*2,
        borderRadius        : 60,
        justifyContent: "center",
        alignItems: 'center'}}

        >
        <Text>{this.state.text}</Text>
      </ View>

      <Button
        color={this.state.selectedColor}
        title="Save"
        onPress={
          () => {
            this.props.createScene({
              "name": this.state.text,
              "lights": this.props.lights,
              "recycle": true,
              "picture": this.props.selectedColor
            })
            this.props.hideModal("create")}
        }
        />
        </View>
        )

  } else {
    console.log("edit");
    return (
      <View>

      <Text style={{
          color: "white",
          fontSize: 25,
          marginBottom: 20}}>Change name: </Text>

    <TextInput
      style={{borderColor: "red",
        backgroundColor: "rgb(230, 230, 230)",
        paddingLeft: 5,
        height: 50
      }}
      onChangeText={(text) => this.setState({text})}
      value={this.state.text}
      placeholder={this.props.scene.name}
      />

    <Button
      color="white"
      title="Select Color"
      onPress={this.openModal}
      />
    <View style={{backgroundColor     : this.state.selectedColor,
      marginLeft: 20,
      width               : 60*2,
      height              : 60*2,
      borderRadius        : 60,
      justifyContent: "center",
      alignItems: 'center'}}

      >
      <Text>{this.state.text}</Text>
    </ View>

    <Button
      color={this.state.selectedColor}
      title="Update"
      onPress={
        () => {
          this.props.updateScene(this.props.id, {
            "name": this.state.text,
            "lights": this.props.lights,
            "recycle": true,
            "picture": this.props.selectedColor
          })
          this.props.hideModal("create")}
      }
      />
    </View>)

  }
  }
  render() {

    return (
      <View style={styles.container}>
      <Modal
        isVisible={this.state.modalIsOpen}
        >

        <TriangleColorPicker
          onColorSelected={this.handleSelect}
          style={{flex: 1}}
          />

        </ Modal>

        {this.renderForm()}
        <Text
          style={{
            fontSize: 50,
            color: "white"}}
          >
        </Text>
        <Button
          color= "white"
          title="close"
          onPress={() => this.props.hideModal()}
          />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(33, 33, 33, .4)',
    justifyContent: "center",
    alignItems: "center"
  }
});

export default SceneForm;
