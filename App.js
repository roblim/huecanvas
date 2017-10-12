import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import jsHue from "jshue";
import SceneIndexContainer from "./components/scenes/scene_index_container";
import Root from './components/root';
import configureStore from './store/store';
import { Provider } from 'react-redux';

const hue = jsHue();

let store = configureStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Root />
        </View>
      </Provider>
    );
  }
}
