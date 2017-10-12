import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


class RoomsIndexItem extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View>
        <Text>Rooms is Working</Text>
      </View>
    );
  }
}



export default RoomsIndexItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'blue'
  }
});
