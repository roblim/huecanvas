import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Modal from "react-native-modal";
import SceneFooter from "./scenes/scene_footer";
import DiscoverContainer from "./discover/discover_container";
import SceneIndexContainer from "./scenes/scene_index_container";
import TestComponent from './light_index/test_component.js';
import LightIndexContainer from './light_index/light_index_container';

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

  getBridges() {
    hue.discover().then(bridges => {

    if(bridges.length === 0) {
      console.log(bridges.length);
      return (
        <Text>dexx</ Text>
      )
        console.log('No bridges found. :(');
    }
    else {
        bridges.forEach(b => console.log('Bridge found at IP address %s.', b.internalipaddress));
    }
  }).catch(e => console.log('Error finding bridges', e));
  }

  // <SceneIndexContainer />
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
  			<View style={{flex: 1}}>
  				<Text>This is the root page</ Text>
            <SceneFooter />
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

              <TestComponent />
  			</View>

        <SceneIndexContainer />

        <View style={styles.container}>
          <Button onPress={() => this.getBridges()}
                title="discover"
          />
          <Text>Hello</ Text>
        </View>
        <View>
          <Button
            onPress={() => navigate('roomsEdit')}
            title="Navigate to RoomsNew"
          />
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
