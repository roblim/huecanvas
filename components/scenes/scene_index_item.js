import React from "react";
import { Button, View, Text } from "react-native";

class SceneIndexItem extends React.Component {

  constructor(props) {
    super(props);

    // console.log("scenes?");
    // console.log(this.props);

  }


  render() {
    return (

      <View style={{backgroundColor: "white",
                    borderWidth: .25,
                    borderColor: "black",
                    padding: 5}}>
      <Button style={{color: "magenta"}}
              title={this.props.item.item.name}
              onPress={() => {
                this.props.fetchScene(this.props.item.index)
                this.props.setScene(this.props.item.item.name)
              }}
       />

      </ View>
    )
  }

}

export default SceneIndexItem;
