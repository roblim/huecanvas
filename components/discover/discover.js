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
    if (this.props.user) {
      this.hideModal()
    }
    };


  userOptions() {

    if (this.props.user) {
      this.props.fetchLights(this.props.user)
      setTimeout(() => this.props.hideModal(), 1500);
      return (
        <Text style={{
            color: "white",
            fontSize: 50
          }}>Welcome back</Text>
      )
    } else {
      return (
        <View style={{alignItems: 'center', alignContent: "space-between"}}>

          <Text style={{padding: 50, fontSize: 20, color: "white"}}>Press button on the Philips Hue bridge, then press Done.</Text>
          <Image source={require("../../docs/click.png")}
            style={{width: 300, height: 300}}
            />
          <Button color="white"
            style={{fontSize: 30}}
            title={"Done"}
            onPress={() => {
              this.props.createUser(this.props.bridge);
              this.props.hideModal();
              setTimeout(() => {
                this.props.fetchLights(this.props.user)
              }, 2000)
            }}
            />
          </ View>

      )


    }
  }

  render() {
    if (!this.props.user) {
      return (
        <Text style={{color: "white", fontSize: 30}}>
          please wait
        </ Text>
      )
    }
    return (
      <View>
        <Text>Butt</Text>
        {this.userOptions()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "rgba(33, 33, 33, .4)",
    color: "white"


  }
})
export default Discover;
