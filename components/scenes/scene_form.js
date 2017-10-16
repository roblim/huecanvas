import React from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";
import { FormLabel } from "react-native-elements";

class SceneForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };

  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={{fontSize: 25, marginBottom: 20}}>Save current scene as: </Text>

      <TextInput
        style={{borderColor: "red",
          backgroundColor: "rgb(240, 240, 240)",
          width: "50%",
          height: 50
        }}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        placeholder="scene name"
        />

      <Button
        color='black'
        title="Save"
        onPress={
          () => {
            this.props.createScene({
              "name": this.state.text,
              "lights": this.props.lights,
              "recycle": true
            })
            this.props.hideModal("create")}
        }
        />
        <Button
          color= "black"
          title="close"
          onPress={() => this.props.hideModal("create")}
          />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    justifyContent: "center",
    alignItems: "center"
  }
});

export default SceneForm;
