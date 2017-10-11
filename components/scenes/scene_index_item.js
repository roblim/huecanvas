import React from "react";
import { Button, View, Text } from "react-native";

class SceneIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.id = this.props.item.index;

  }

  render() {
    return (

      <View style={{backgroundColor: "cyan"}}>
      <Button style={{color: "magenta"}}
              title={`set ${this.props.item.item[this.id].name}`}
              onPress={() => this.props.setScene(this.id)}
       />
      </ View>
    )
  }

}

export default SceneIndexItem;
