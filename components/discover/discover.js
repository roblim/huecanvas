import React from "react";
import { Text, Button, StyleSheet, View, Image } from "react-native";
import { AsyncStorage } from "react-native";

class Discover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: false
    }
    this.userOptions = this.userOptions.bind(this);
  }

  componentWillMount() {
    this.props.fetchBridges()
      AsyncStorage.getItem("users").then((users) => {
        users = JSON.parse(users);
        if (!!Object.keys(users)[0]) {
          this.setState({user: true})
          users = Object.keys(users).map((user) => this.props.bridge.user(user))
          console.log("users(array)", users[0].getLights());
          this.props.fetchLights(users[0])

        } else {
          console.log("no user");
          this.setState({user: false})
        }
      })

    };

  userOptions() {
    console.log(this.state);
    console.log("hit");
    if (this.state.user) {
      this.props.fetchLights(this.props.user)
      setTimeout(() => this.props.hideModal(), 1500);
      return (
        <Text style={{fontSize: 50}}>Welcome back</Text>
      )
    } else {
      return (
        <View style={{alignItems: 'center', alignContent: "space-between"}}>
          <Text style={{padding: 50, fontSize: 20}}>Press button on the Philips Hue bridge, then click create user</Text>
          <Image source={require("../../docs/icons/icon_pack_v2.02/Push-link/PDF/pushlink_bridgev2-1.png")}
            style={{width: 300, height: 300}}
      />
    <Button color="black"
            title={"create user"}
            onPress={() => {
              this.props.createUser(this.props.bridge);
              this.props.hideModal();
            }}
            />
          </ View>

      )
    }
  }

  render() {
    console.log("hit2");
    return (
      <View>

        {this.userOptions()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "rgba(255, 255, 255, .9)",

  }
})
export default Discover;
