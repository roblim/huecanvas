import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Root from './components/root';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';
import * as roomsActions from './actions/room_actions'
import * as APIUtil from './util/rooms_api_util'

export default class App extends React.Component {
  constructor() {
    super();
    this.rooms = []
  }

  componentWillMount() {
    // AsyncStorage.clear()
    // AsyncStorage.setItem('1', JSON.stringify({id: '1', name: 'Living Room'}))
    // AsyncStorage.setItem('2', JSON.stringify({id: '2', name: 'Dining Room'}))
    // AsyncStorage.setItem('3', JSON.stringify({id: '3', name: 'Family Room'}))
    // AsyncStorage.setItem('4', JSON.stringify({id: '4', name: 'Great Room'}))
    // roomsActions.fetchRooms()
  }

  componentDidMount() {
    this.rooms = APIUtil.fetchRooms().then(res => {
      roomsActions.receiveRooms(res)
      console.log(res);
    //   this.setState({res})
      // console.log('State', this.state);
    })
    // roomsActions.createRoom({id: 1, name: 'Daddys Room'});
    // console.log(this.rooms);
  }

  render() {
    let store = configureStore()
    // console.log('API UTIL', APIUtil);
    console.log(store.getState());
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
