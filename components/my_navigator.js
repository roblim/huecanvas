import React from "react";
import { NavigatorIOS, Text } from "react-native";
import PropTypes from "prop-types";
import SceneIndexContainer from "./scenes/scene_index_container";

export default class NavigatorIOSApp extends React.Component{
  render () {
    return (
      <NavigatorIOS
      initialRoute={{
        component: SceneIndexContainer,
        title: "all scenes"
      }}
        style={{flex: 1}}
      />
    );
  }
}

class MyNavigator extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);

    this.onForward = this.onForward.bind(this);
  }

  onForward() {
    this.props.navigator.push({
      title: "Scene" + nextIndex,
    })
  }

  render() {
    return (
      <View>
        <Text>Current Scene: { this.props.title }</ Text>
        <TouchableHighlight onPress={this.onForward}>
          <Text>scenes button</Text>
        </ TouchableHighlight>
      </View>
    )
  }
}
