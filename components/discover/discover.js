import React from "react";
import { Text } from "react-native";

class Discover extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchBridges();
  }

  render() {
    return (
      <Text>discover!</Text>
    )
  }
}

export default Discover;
