import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import Modal from "react-native-modal";
import SceneFooter from "./scenes/scene_footer";
import DiscoverContainer from "./discover/discover_container";
import RoomsIndexContainer from './rooms/rooms_index_container';
import SceneIndexContainer from "./scenes/scene_index_container";
import TestComponent from './light_index/test_component.js';
import LightIndexContainer from './light_index/light_index_container';
import * as APIUtil from '../util/rooms_api_util'
import { AsyncStorage } from 'react-native';


export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      displayed: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.button = this.button.bind(this);
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  componentWillMount() {

      this.showModal();
  }

  showModal() {
    this.setState({ isModalVisible: true });
  }

  hideModal() {
    this.setState({ isModalVisible: false });
  }

  toggleDisplay(bool) {
    this.setState({displayed: bool})
  }

  button() {
    if (this.state.displayed) {
      return (
        <Text>Home</Text>
      )
    } else {
      return (
        <Button onPress={() => this.showModal}
          title="find bridge"
          />
      )
    }
  }

  // <SceneIndexContainer />
  // <View style={{flex: 1}}>
  //   <Text>This is the root page</Text>
  //   <SceneFooter />
  //   <Modal
  //     style={{
  //       flex: 1,
  //       justifyContent: "center",
  //       alignItems: "center",
  //       margin: "auto"
  //
  //     }}
  //     isVisible={this.state.isModalVisible}
  //     backdropColor="rgb(255, 255, 255)"
  //
  //     >
  //     <Button onPress={this.hideModal}
  //       title="close"
  //       />
  //     <DiscoverContainer />
  //   </Modal>
  //
  // </View>

  // <View style={styles.container}>
  //   <Button onPress={() => this.showModal}
  //     title="discover"
  //     />
  //   <Button onPress={this.showModal}
  //     title="find bridge"
  //     />
  //   <Button
  //     onPress={() => navigate('roomTemp')}
  //     title="Navigate to RoomTemp"
  //     />
  // </View>
  //
  // <View>
  //   <Button
  //     onPress={() => navigate('roomsNew')}
  //     title="Navigate to RoomsNew"
  //   />
  // </View>
  // <View>
  //   <Button
  //     onPress={() => navigate('roomsIndex')}
  //     title="Navigate to RoomsIndex"
  //   />
  // </View>
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <StatusBar hidden />
  			<View style={{flex: 1}}>
          <Modal
            style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto"
                  }}
            isVisible={this.state.isModalVisible}
            backdropColor="rgba(33, 33, 33, .4)"
          >
            <DiscoverContainer hideModal={this.hideModal}
                                navigate={navigate}
                                toggleDisplay={this.toggleDisplay}

            />
          </Modal>
  			</View>


        <View style={styles.container}>


        </View>
        <View>
          <Button
            onPress={() => navigate('roomsNew')}
            title="Navigate to RoomsNew"
          />
        </View>
        <View>
          <Button
            onPress={() => navigate('roomsIndex')}
            title="Navigate to RoomsIndex"
          />
        </View>
        <LightIndexContainer />
        <SceneFooter />
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
