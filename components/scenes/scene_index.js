import React from "react";
import { Text } from "react-native";

class SceneIndex extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <Text>Scene!</ Text>
    )
  }

}

export default SceneIndex;
