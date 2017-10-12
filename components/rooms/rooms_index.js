import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight, Button, PanResponder, Animated, Dimensions } from 'react-native';
import RoomsIndexItem from './rooms_index_item';
import { AsyncStorage } from 'react-native';

class RoomsIndex extends Component{
  constructor(props){
    super(props);
    this.state={
      pan: new Animated.ValueXY()
    };

    this.panResponder = PanResponder.create({
      OnStartShouldSetPanResponder: ()=> true,
      onPanResponderMove: Animated.event([null, {
        dx:this.state.pan.x,
        dy: this.state.pan.y
      }]),
      onPanResponderRelease: (e, gesture)=>{
        console.log("drag was released");
        console.log(e);
      }
    });
    this.renderRooms = this.renderRooms.bind(this);
    this.renderLights = this.renderLights.bind(this);
    this.renderDragArea = this.renderDragArea.bind(this);
    this.renderCreateRoom = this.renderCreateRoom.bind(this);
    this.handleClickRoom = this.handleClickRoom.bind(this);
    this.handleClickLight = this.handleClickLight.bind(this);
}

  componentWillMount(){
    this.props.fetchRooms();
    this.props.fetchLights();
  }

  handleClickRoom(){
    //Room Form
  }

  handleClickLight(){
    //edit light name
  }

  renderCreateRoom(){
    return(
      <View>
        <Text>Create New Room</Text>
      </View>
    );
  }

  renderDragArea(){
    return(
      <View>
        <Text>Drag Here To Delete Room</Text>
      </View>
    );
  }

  renderRooms(){
    const rooms = this.props.rooms;
    const lights = this.props.lights;
    return(
      <Animated.View {...this.panResponder.panHandlers} style={this.state.pan.getLayout()}>
        {
          Object.values(rooms).map(room =>(
            <View style={styles.container} key={room.id}>
              <RoomsIndexItem room={room} lights={lights} key={room.id}/>
            </View>
          ))
        }
      </Animated.View>
    );
  }

  renderLights(){
    const lights = this.props.lights;
    return(
      <View>
        {
          Object.values(lights).map(light =>(
            <Animated.View {...this.panResponder.panHandlers} style={[this.state.pan.getLayout(), styles.container]} key={light.id + "light"}>
              <Text>{light.name}</Text>
            </Animated.View>
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
        {this.renderCreateRoom()}
        {this.renderRooms()}
        {this.renderLights()}
        {this.renderDragArea()}
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
