import React from "react";
import { Text, Button, StyleSheet, View, Image } from "react-native";

class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.fetchBridges();
  }

  handleClick() {
    let bridges = this.props.fetchBridges();
    console.log(bridges);
  }

  render() {
    return (
      <View style={styles.box}>
        <Text>Discover page</Text>
        <Image source={require("../../docs/icons/icon_pack_v2.02/Push-link/PDF/pushlink_bridgev1.pdf")}
                style={{width: 100, height: 100}}
          />
      </ View>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "grey"
  }
})
export default Discover;
