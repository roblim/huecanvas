import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { FormInput, FormLabel } from "react-native-elements";

export default class SceneForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = this.props.lights;

  }

  render() {
    const name = "america";
    return (

      <Button
        color="white"
        title="Save"
        onPress={() => {
          this.props.hideModal("create")
        }
        }
        />

    )
  }
}
// <FormInput
//   onChange={this.update("name")}
//   required
//   type="text"
//   value={name}
//   style=(styles.input)
//   placeholder="Name your scene"
//   />
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4286f4',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%'
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    fontSize: 20,
    textAlign: 'center',
    margin: 15,
    width: 345
  },
  saveBtn: {
    color: '#1ea52d',
  },
});
