import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Modal from "react-native-modal";
import SceneFooter from "./scenes/scene_footer";
import DiscoverContainer from "./discover/discover_container";
import RoomsIndexContainer from './rooms/rooms_index_container';
import SceneIndexContainer from "./scenes/scene_index_container";
import TestComponent from './light_index/test_component.js';
import LightIndexContainer from './light_index/light_index_container';
import * as APIUtil from '../util/rooms_api_util'


export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {

  }

  showModal() {
    this.setState({ isModalVisible: true });
  }

  hideModal() {
    this.setState({ isModalVisible: false });
  }

  // <SceneIndexContainer />
  render() {
    const { navigate } = this.props.navigation;
    console.log("all rooms", APIUtil.fetchRooms());
    return (
      <View>
  			<View style={{flex: 1}}>
  				<Text>This is the root page</Text>
            <SceneFooter />
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
              </Modal>

  			</View>


        <View style={styles.container}>
          <Button onPress={() => this.showModal}
                title="discover"
          />
        <Button onPress={this.showModal}
          title="click for all lights"
          />

        </View>
        <View>
          <Button
            onPress={() => navigate('roomsEdit')}
            title="Navigate to RoomsNew"
          />
      </View>
      <View>
        <Button
          onPress={() => navigate('roomsIndex')}
          title="Navigate to RoomsIndex"
        />
      <LightIndexContainer />
    </View>
    </View>
    );
  }
}

// <SceneIndexContainer />
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
