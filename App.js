import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import configureStore from './store/store';
// import Root from './components/root.jsx';

export default class App extends React.Component {
  render() {
    let store = configureStore()
    return (
      <Root store={store} />
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
