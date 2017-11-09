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
      selectedColor: "rgb(240, 240, 240)"
     };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.renderForm = this.renderForm.bind(this);
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
          width: "50%",
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
        width: "50%",
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
    </View>)

  }
  }
  render() {

    return (
      <View style={styles.container}>
      {() => this.renderForm()}
      <Modal
        isVisible={this.state.modalIsOpen}
        >

        <TriangleColorPicker
          onColorSelected={this.handleSelect}
          style={{flex: 1}}
          />

        </ Modal>

        <Text
          style={{
            fontSize: 50,
            color: "white"}}
          >
          BEEEEEB
        </Text>
        <Button
          color= "white"
          title="close"
          onPress={() => this.props.hideModal("create")}
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
