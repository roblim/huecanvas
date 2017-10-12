import React from 'react';
import { View, Text, Button } from 'react-native';
import Modal from "react-native-modal";
import {
  StackNavigator,
} from 'react-navigation';
import SceneIndexContainer from "./scenes/scene_index_container";
import DiscoverContainer from "./discover/discover_container";

export default class Root extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      isModalVisible: false

    }

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ isModalVisible: true })
  }

  hideModal() {
    this.setState({ isModalVisible: false })
  }



  render() {
    return (
			<View style={{flex: 1}}>
				<Text>This is the root page</ Text>
          <SceneIndexContainer />
          <Button onPress={this.showModal}
                  title="click for all lights"
            />
          <Modal
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              margin: "auto"

            }}
            isVisible={this.state.isModalVisible}
            backdropColor="rgb(255, 255, 255)"

            >
            <Button onPress={this.hideModal}
              title="close"
              />
            <DiscoverContainer />
            </ Modal>
          </ View>
    )
  }
}
