import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import jsHue from "jshue";
import SceneIndexContainer from "./components/scenes/scene_index_container";
import { StyleSheet, Text, View } from 'react-native';
import Root from './components/root';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import LightIndexContainer from './components/light_index/light_index_container.js';

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
    let store = configureStore()
    return (
      <Provider store={store}>
        <Root />
        <SceneIndexContainer />
      </Provider>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
      <View style={styles.container}>
        <Button onPress={() => this.getBridges()}
                title="discover"
          />
        <Text>Hello</ Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
