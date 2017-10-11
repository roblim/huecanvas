import React from "react";
import { Text, Button, StyleSheet, View } from "react-native";

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
      <Text>discover!</Text>
      <Button onPress={this.handleClick}
              title="get bridges"
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
