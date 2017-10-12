import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import jsHue from "jshue";
import SceneIndexContainer from "./components/scenes/scene_index_container";
import Root from './components/root';
import configureStore from './store/store';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import { AsyncStorage } from 'react-native';
import * as roomsActions from './actions/room_actions';
import * as APIUtil from './util/rooms_api_util';
=======
import LightIndexContainer from './components/light_index/light_index_container.js';
>>>>>>> 0245ab93a2e52a36935bdf0fb04793b279936271

let store = configureStore();

const hue = jsHue();

export default class App extends React.Component {
<<<<<<< HEAD
  constructor() {
    super();
    this.rooms = [];
  }

  componentWillMount() {
    AsyncStorage.clear();
    AsyncStorage.setItem('1', JSON.stringify({id: '1', name: 'Living Room'}));
    AsyncStorage.setItem('2', JSON.stringify({id: '2', name: 'Dining Room'}));
    AsyncStorage.setItem('3', JSON.stringify({id: '3', name: 'Family Room'}));
    AsyncStorage.setItem('4', JSON.stringify({id: '4', name: 'Great Room'}));
    return store.dispatch(roomsActions.fetchRooms());
    // return store.dispatch(roomsActions.createRoom({id: 1, name: 'Daddys Room'}));
  }
=======

  getBridges() {
    hue.discover().then(bridges => {
>>>>>>> 0245ab93a2e52a36935bdf0fb04793b279936271

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
    return (
      <Provider store={store}>
        <View>
        <Root />
        <SceneIndexContainer />

        <View style={styles.container}>
          <Button onPress={() => this.getBridges()}
                title="discover"
          />
          <Text>Hello</ Text>
        </View>
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
