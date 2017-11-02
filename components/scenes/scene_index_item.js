import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

class SceneIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.id = Object.keys(props.item.item)[0];
    // console.log(props);
  }


  render() {
    const scene = this.props.item.item[this.id];
    return (

      <View style={{backgroundColor     : this.props.color,
      width               : 60*2,
      height              : 60*2,
      borderRadius        : 60,
      justifyContent: "center",
      alignItems: 'center'}}

      >
      <Text
              style={{color: "black", width: "80%", textAlign: "center"}}
              onPress={() => {
                this.props.fetchScene(this.id)
                this.props.setScene(this.id)
                this.props.displayScene(scene.name)
              }}
       >{scene.name}</Text>

      </ View>
    )
  }

}

export default SceneIndexItem;
