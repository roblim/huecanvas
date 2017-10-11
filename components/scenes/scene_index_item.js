import React from "react";
import { Text, View } from "react-native";

const SceneIndexItem = (props) => {
  console.log(props);
  return (
    <View style={styles.container}>
    <Text>{props.scene.name}</ Text>
    </ View>
  )

}

export default SceneIndexItem;
