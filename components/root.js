import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Modal from "react-native-modal";
import {
  StackNavigator,
} from 'react-navigation';
import SceneIndexContainer from "./scenes/scene_index_container";
import DiscoverContainer from "./discover/discover_container";
import RoomsIndexContainer from './rooms/rooms_index_container';
import TestComponent from './light_index/test_component.js';
import LightIndexContainer from './light_index/light_index_container';


export default class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false

    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ isModalVisible: true });
  }

  hideModal() {
    this.setState({ isModalVisible: false });
  }


  // <SceneIndexContainer />
  render() {
    return (
			<View style={styles.container}>
				<RoomsIndexContainer/>
			</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
