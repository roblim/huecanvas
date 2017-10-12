import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import RoomsIndexItem from './rooms_index_item';
import { AsyncStorage } from 'react-native';

class RoomsIndex extends Component{
  constructor(props){
    super(props);
    //fake until this.props.rooms is working
    this.state={
      rooms:{
        1:{
          id: 0,
          name: "Living Room"
        },
        2:{
          id: 1,
          name: "Family Room"
        },
        3:{
          id: 2,
          name: "Bedroom"
        }
      }
    };
  }

  componentDidMount(){
    this.props.fetchRooms();
    // this.setState({
    //   rooms: this.props.rooms
    // });
  }
  render(){
    const rooms = this.state.rooms;
    return(
      <ScrollView>
        <Text>{`\n`}</Text>
        <Text>{`\n`}</Text>
        <Text>{`\n`}</Text>
        <Text>{`\n`}</Text>
        {
          Object.values(rooms).map(room =>(
            <View style={styles.container}>
              <RoomsIndexItem room={room}/>
            </View>
          ))
        }
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    color: 'blue'
  }
});

export default RoomsIndex;
