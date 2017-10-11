import React from "react";
import { Button, View, Text } from "react-native";

class SceneIndexItem extends React.Component {

  constructor(props) {
    super(props);

    console.log(props.item.index);

    this.state = {
      currentScene: 0
    }

    console.log(this.state);
    this.id = this.props.item.index;

    this.setScene = this.setScene.bind(this);
  }

  setScene() {
    console.log("click heard");
    this.setState({currentScene: this.id})
    console.log(this.state);
  }

  render() {
    return (

      <View style={{backgroundColor: "cyan"}}>
      <Button style={{color: "magenta"}}
              title={`set ${this.props.item.item[this.id].name}`}
              onPress={() => this.setScene()}
       />
      </ View>
    )
  }

}

export default SceneIndexItem;
