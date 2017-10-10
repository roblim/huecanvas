import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import Root from './components/root';
import configureStore from './store/store';
import { Provider } from 'react-redux';
||||||| merged common ancestors
=======
import LightIndexContainer from './components/light_index/light_index_container.js';
>>>>>>> 366bced33797808f33c71fc84b2b8bec2c11ec25

export default class App extends React.Component {
  render() {
    let store = configureStore()
    return (
<<<<<<< HEAD
      <Provider store={store}>
        <Root />
      </Provider>
||||||| merged common ancestors
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
=======
      <View style={styles.container}>
        <LightIndexContainer />
      </View>
>>>>>>> 366bced33797808f33c71fc84b2b8bec2c11ec25
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
