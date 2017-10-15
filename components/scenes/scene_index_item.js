import React from "react";
import { Button, View, Text } from "react-native";

class SceneIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.id = Object.keys(props.item.item)[0];
  }


  render() {
    const scene = this.props.item.item[this.id];
    return (

      <View style={{backgroundColor: "transparent", marginBottom: 10, padding: 10}}>
      <Button color="rgb(255, 255, 255)"
              title={scene.name}
              onPress={() => {
                this.props.fetchScene(this.id)
                this.props.setScene(this.id)
                this.props.displayScene(scene.name)
              }}
       />

      </ View>
    )
  }

}

export default SceneIndexItem;
