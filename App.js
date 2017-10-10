import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View, Button } from 'react-native';
import jsHue from "jshue";
import SceneIndexContainer from "./components/scenes/scene_index_container";
=======
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import Root from './components/root';
import configureStore from './store/store';
import { Provider } from 'react-redux';
||||||| merged common ancestors
=======
import LightIndexContainer from './components/light_index/light_index_container.js';
>>>>>>> 366bced33797808f33c71fc84b2b8bec2c11ec25
>>>>>>> origin/room_form_component

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
        <Button onPress={() => this.getBridges()}
                title="discover"
          />
        <Text>Hello</ Text>
          <SceneIndexContainer />
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
