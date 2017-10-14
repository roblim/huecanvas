import React from "react";
import { Text, Button, StyleSheet, View, Image } from "react-native";

class Discover extends React.Component {
  constructor(props) {
    super(props);


  }

  componentWillReceiveProps() {
    console.log(this.props);
  }

  componentDidMount() {
    this.props.fetchBridges();
    // this.props.createUser();
    // this.props.fetchLights();
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
