import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight, Button } from 'react-native';
import RoomsIndexItem from './rooms_index_item';
import { AsyncStorage } from 'react-native';

class RoomsIndex extends Component{
  constructor(props){
    super(props);
    this.state={};
    this.renderRooms = this.renderRooms.bind(this);
    this.renderLights = this.renderLights.bind(this);
}

  componentWillMount(){
    this.props.fetchRooms();
    this.props.fetchLights();
  }

  renderRooms(){
    const rooms = this.props.rooms;
    const roomLights = this.props.lights;
    return(
      <View>
        {
          Object.values(rooms).map(room =>(
            <View style={styles.container} key={room.id}>
              <RoomsIndexItem room={room} lights={roomLights}/>
            </View>
          ))
        }
      </View>
    );
  }

  renderLights(){
    const lights = this.props.lights;
    return(
      <View>
        {
          Object.values(lights).map(light =>(
            <View style={styles.container} key={light.id}>
              <Button title={light.name}></Button>
            </View>
          ))
        }
      </View>
    );

  }
  render(){
    return(
      <ScrollView>
        <Text>{`\n`}</Text>
        <Text>{`\n`}</Text>
        <Text>{`\n`}</Text>
        <Text>{`\n`}</Text>
        {this.renderRooms()}
        {this.renderLights()}
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
