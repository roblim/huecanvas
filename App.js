import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SceneIndexContainer from "./components/scenes/scene_index_container";
<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native';
import Root from './components/root';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import LightIndexContainer from './components/light_index/light_index_container.js';
=======
import DiscoverContainer from "./components/discover/discover_container";
import Root from './components/root';
import configureStore from './store/store';
import { Provider } from 'react-redux';
>>>>>>> bridge-discovery

export default class App extends React.Component {

  render() {
<<<<<<< HEAD
    let store = configureStore()
=======
    let store = configureStore();
>>>>>>> bridge-discovery
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
      <Provider store={store}>
         <Root />
        </ Provider>
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
