import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import Swipeout from "react-native-swipeout";

class SceneIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.id = Object.keys(props.item.item)[0];

  }


  render() {
    const scene = this.props.item.item[this.id];
    return (

      <View style={{
      flex: 1,
      backgroundColor     : "rgba(33, 33, 33, .4)",
      justifyContent: "center",
      alignItems: 'center',
    }}

      >

      <Swipeout
        right={swipeoutBtns}
        style={{
          backgroundColor: "transparent",
          width: "100%"}}
        >
      <Text
              style={{
                padding: 10,
                fontSize: 30,
                flex: 1,
                color: "white",
                textAlign: "center"}}
              onPress={() => {
                this.props.fetchScene(this.id)
                this.props.setScene(this.id)
                this.props.displayScene(scene.name)
              }}
       >{scene.name}</Text>
   </Swipeout>

      </ View>
    )
  }

}

const swipeoutBtns = [
  {
    text: 'Delete',
    backgroundColor: "red"
  }
]

export default SceneIndexItem;
