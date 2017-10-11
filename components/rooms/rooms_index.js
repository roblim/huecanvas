import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RoomsIndexItem from './rooms_index_item';


class RoomsIndex extends Component{
  render(){
    return(
      <View>
        <Text>Rooms Container</Text>
        <RoomsIndexItem />
      </View>

    );
  }
}


export default RoomsIndex;
