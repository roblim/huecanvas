import React from "react";
import { Button, View, Text } from "react-native";

class SceneIndexItem extends React.Component {

  constructor(props) {
    super(props);

    this.id = this.props.item.index;
    console.log("scenes?");
    console.log(this.props);
    console.log("???");
  }


  render() {
    return (

      <View style={{backgroundColor: "cyan", padding: 5}}>
      <Button style={{color: "magenta"}}
              title={this.props.item.item.name}
              onPress={() => this.props.setScene(this.props.item.item.name)}
       />

      </ View>
    )
  }

}

export default SceneIndexItem;
