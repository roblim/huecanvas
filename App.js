import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SceneIndexContainer from "./components/scenes/scene_index_container";
import AppContainer from './components/app_container';
import Root from './components/root';
import DiscoverContainer from "./components/discover/discover_container";
import configureStore from './store/store';
import { Provider } from 'react-redux';
import LightIndexContainer from './components/light_index/light_index_container.js';
import jsHue from 'jshue'
import TabNavigator from './components/navigator';
import { addNavigationHelpers } from 'react-navigation';

let store = configureStore()

const hue = jsHue();

export default class App extends React.Component {

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

  render() {
    return (
      <Provider store={store}>
        <View>
          <AppContainer />
          <SceneIndexContainer />

          <View style={styles.container}>
          <Button onPress={() => this.getBridges()}
                title="discover"
          />
          <Text>Hello</ Text>
        </View>
      </View>
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
