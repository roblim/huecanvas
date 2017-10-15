import React from "react";
import { Text, Button, StyleSheet, View, Image } from "react-native";
import { AsyncStorage } from "react-native";

class Discover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      validDevice: false,
      currUser: {},
      userName: ""
    }
    this.creatingUser = this.creatingUser.bind(this);
  }

  componentWillMount() {
    this.props.fetchBridges();

    AsyncStorage.getItem("users").then((users) => {
      users = JSON.parse(users);

      if (!!Object.keys(users)[0]) {
        users = Object.keys(users).map((user) => this.props.bridge.user(user))
        this.props.fetchLights(users[0])
      } else {
        console.log("still false");
      }
    })

    console.log(this.state);
    // this.props.createUser();
  }
  // componentDidMount() {
  //   if (this.state.validDevice) {
  //     this.props.fetchLights(this.state.user);
  //
  //   } else {
  //     console.log("unauth");
  //   }
  // }

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
      <Text>{this.state.userName}</Text>

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
