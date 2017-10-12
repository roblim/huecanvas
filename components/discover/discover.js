import React from "react";
import { Text, Button, StyleSheet, View, Image } from "react-native";

class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.fetchLights();
  }

  handleClick() {
    let lights = this.props.fetchLights();
    let bridges = this.props.fetchBridges();
    lights();
    bridges();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Press the button on top of your Hue Bridge</Text>
        <Image source={require("../../docs/icons/icon_pack_v2.02/Push-link/PDF/pushlink_bridgev2-1.png")}
                style={{width: 200, height: 200}}
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