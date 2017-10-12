import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SceneIndexContainer from "./components/scenes/scene_index_container";
import DiscoverContainer from "./components/discover/discover_container";
import Root from './components/root';
import configureStore from './store/store';
import { Provider } from 'react-redux';

export default class App extends React.Component {

  render() {
    let store = configureStore();
    return (
      <View style={styles.container}>
      <Provider store={store}>
         <Root />
        </ Provider>
        <Text>Hello</ Text>
      </View>
      </Provider>
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
