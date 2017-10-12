import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SceneIndexContainer from "./components/scenes/scene_index_container";
import DiscoverContainer from "./components/discover/discover_container";
import Root from './components/root';
import configureStore from './store/store';
import { Provider } from 'react-redux';

let store = configureStore();
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
           <Root />
        </ Provider>
      </View>
    );
  }
}
