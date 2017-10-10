import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Root from './components/root';
import configureStore from './store/store';
import { Provider } from 'react-redux';

import LightIndexContainer from './components/light_index/light_index_container.js';

export default class App extends React.Component {
  render() {
    let store = configureStore()
    return (
      <Provider store={store}>
        <Root />
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
