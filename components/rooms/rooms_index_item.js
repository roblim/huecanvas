import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import RoomsForm from './room_form';

class RoomsIndexItem extends Component{
  constructor(props){
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(){
    return(
      <RoomsForm></RoomsForm>
    );
  }
  render(){
    const room = this.props.room;
    const lights = this.props.lights;
    return(
        <TouchableOpacity style={styles.button} onPress={this.handlePress}>
          <View style={styles.button}>
            <Text style={styles.text}>{room.name}</Text>
          </View>
        </TouchableOpacity>
    );
  }
}

// const RoomsIndexItem =({room, lights}) =>{
//   return(
//       <View>
//         <Button title={room.name}></Button>
//       </View>
//   );
// };

export default RoomsIndexItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'white'
  },
  button:{
    backgroundColor: "red"
  }
});
