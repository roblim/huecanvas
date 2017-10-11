import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RoomsIndexItem from './rooms_index_item';


class RoomsIndex extends Component{
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchRooms();
  }
  render(){
    return(
      <View>
        <Text>Rooms Container Yay</Text>
        <RoomsIndexItem />
      </View>

    );
  }
}


export default RoomsIndex;
