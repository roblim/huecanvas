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

  render() {
    return (
      <Provider store={store}>
          <AppContainer />
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
