import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Root from './components/root';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';
import * as roomsActions from './actions/room_actions'
import * as APIUtil from './util/rooms_api_util'

let store = configureStore()

export default class App extends React.Component {
  constructor() {
    super();
    this.rooms = []
  }

  componentWillMount() {
    // AsyncStorage.clear()
    // AsyncStorage.setItem("rooms", "{}")
    // AsyncStorage.setItem('1', JSON.stringify({id: '1', name: 'Living Room'}))
    // AsyncStorage.setItem('2', JSON.stringify({id: '2', name: 'Dining Room'}))
    // AsyncStorage.setItem('3', JSON.stringify({id: '3', name: 'Family Room'}))
    // AsyncStorage.setItem('4', JSON.stringify({id: '4', name: 'Great Room'}))
    // store.dispatch(roomsActions.fetchRooms());
    // store.dispatch(roomsActions.fetchRooms());
    // store.dispatch(roomsActions.createRoom({id: 1, name: 'Daddys Room'}));
    // store.dispatch(roomsActions.createRoom({id: '1', name: 'Living Room'}));
    // store.dispatch(roomsActions.createRoom({id: '2', name: 'Dining Room'}));
    // store.dispatch(roomsActions.createRoom({id: '3', name: 'Family Room'}));
    // store.dispatch(roomsActions.createRoom({id: '4', name: 'Great Room'}));
  }

  componentDidMount() {
    store.dispatch(roomsActions.fetchRooms());
    // console.log(rooms);
    APIUtil.fetchRooms().then(res => {
      console.log("Util Res", res);
    })
      // return store.dispatch(roomsActions.receiveRooms(res))
    //   this.setState({res})
      // console.log('State', this.state);
    // })
    // console.log(this.rooms);
    // return store.dispatch(roomsActions.deleteRoom(1))
  }

  render() {

    // console.log('API UTIL', APIUtil);
    // console.log(store.getState());
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
