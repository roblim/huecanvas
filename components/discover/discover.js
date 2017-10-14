import React from "react";
import { Text, Button, StyleSheet, View, Image } from "react-native";

class Discover extends React.Component {
  constructor(props) {
    super(props);

    this.creatingUser = this.creatingUser.bind(this);
  }

  componentDidMount() {
    this.props.fetchBridges();
    // this.props.createUser();
    // this.props.fetchLights();
}

  bridgeFound() {
    if (this.props.bridge) {
      return (
        <Text>bridge</Text>
      )
    } else {
      return (
        <Text>Loading</Text>
      )
    }
  }

  creatingUser() {
  if (this.props.user) {
    return (
      <Button title={"authenticate!"}
              onPress={() => this.props.createUser()}
        />
    )
  } else {
    return (
      <View>
      <Text>Press the button on top of your Hue Bridge</Text>
        <Image source={require("../../docs/icons/icon_pack_v2.02/Push-link/PDF/pushlink_bridgev2-1.png")}
          style={{width: 200, height: 200}}
          />
      </View>
    )
  }
}

  render() {
    console.log("props");
    console.log(this.props);
    return (
      <View style={{flex: 1}}>
        {() => bridgeFound()}
      {() => creatingUser()}


      <Button title={"authenticate!"}
              onPress={() => this.props.createUser(this.props.bridge)}
        />
      <Button title={"getLights"}
              onPress={() => this.props.fetchLights(this.props.user)}
        />

      </ View>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "rgba(255, 255, 255, .6)",

  }
})
export default Discover;
