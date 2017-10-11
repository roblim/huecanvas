import React from 'react';
import { View, Text, Modal, Button } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import SceneIndexContainer from "./scenes/scene_index_container";
import DiscoverContainer from "./discover/discover_container";

export default class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animationType: "none",
      transparent: false,
      modalVisible: true
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  openModal() {
    this.setState({modalVisible: true})
  }

  closeModal() {
    this.setState({modalVisible: false})
  }

  render() {
    return (
			<View>
				<Text>This is a test</Text>
          <SceneIndexContainer />
          <Button onPress={this.openModal()}
                  title="open"
            />

			</View>
    );
  }
}




// <Modal
//   animationType={this.state.animationType}
//   transparent={this.state.transparent}
//   modalVisible={this.state.modalVisible}
//   >
//   <Button onPress={this.closeModal()}
//     title="close"
//     />
//   <DiscoverContainer />
//   </ Modal>
