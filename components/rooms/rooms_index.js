import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight, FlatList, PanResponder, Animated, Dimensions, Button } from 'react-native';
import RoomsIndexItem from './rooms_index_item';
import { AsyncStorage } from 'react-native';

class RoomsIndex extends Component{
  constructor(props){
    super(props);
    this.state={
      pan: new Animated.ValueXY(),
      showDraggableLight: true,
      showDraggableRoom: true,
      dropZoneValues: null
    };

    this.panResponderLight = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null,{
          dx: this.state.pan.x,
          dy: this.state.pan.y
      }]),
      onPanResponderRelease: (e, gesture) => {
        if(this.isDropZone(gesture)){
          this.setState({
              showDraggableLight: false
          });
        }else{
          Animated.spring(
              this.state.pan,
              {toValue:{x:0,y:0}}
          ).start();
        }
      }
    });

    this.renderRooms = this.renderRooms.bind(this);
    this.renderLights = this.renderLights.bind(this);
    this.renderDragArea = this.renderDragArea.bind(this);
    this.renderCreateRoom = this.renderCreateRoom.bind(this);
    this.handleClickRoom = this.handleClickRoom.bind(this);
    this.handleClickLight = this.handleClickLight.bind(this);
    this.renderSingleRoom = this.renderSingleRoom.bind(this);
    this.resetLights = this.resetLights.bind(this);
}

  componentWillMount(){
    this.props.fetchRooms();
    this.props.fetchLights();
  }

  isDropZone(gesture){
    const dz = this.state.dropZoneValues;
    return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
  }

  setDropZoneValues(event){
    this.setState({
        dropZoneValues: event.nativeEvent.layout
    });
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
      <View style={styles.dropZone}>
        <Text style={styles.text}>Drag Here To Delete</Text>
      </View>
    );
  }

  renderSingleRoom(room, lights){
    return(
      <View style={styles.room} key={room.id} >
        <RoomsIndexItem room={room} lights={lights} key={room.id}/>
      </View>
    );
  }

  renderRooms(){
    if (!this.props.rooms) { return null; }
    const rooms = this.props.rooms;
    const lights = this.props.lights;
    return(
      <View onLayout={this.setDropZoneValues.bind(this)}>
        {
          Object.values(rooms).map(room =>(
              <View style={styles.room} key={room.id} >
                <RoomsIndexItem room={room} lights={lights} key={room.id}/>
              </View>
          ))
        }
      </View>
    );
  }

  resetLights(){
    this.setState({
      showDraggableLight: true
    });
    Animated.spring(
        this.state.pan,
        {toValue:{x:0,y:0}}
    ).start();
  }

  renderLights(){
    const lights = this.props.lights;
    if(this.state.showDraggableLight){
      return(
        <View>
          {
            Object.values(lights).map(light =>(
              <View style={styles.draggableLight}>
                <Animated.View {...this.panResponderLight.panHandlers} style={[this.state.pan.getLayout(), styles.circle]} key={light.id + "light"}>
                  <Text style={styles.text}>{light.name}</Text>
                </Animated.View>
              </View>
            ))
          }
        </View>
      );
    }


  }
  render(){
    return(
      <View style={styles.mainContainer}>
        {this.renderDragArea()}
        {this.renderCreateRoom()}
        {this.renderRooms()}
        {this.renderLights()}
        <TouchableHighlight onPress={this.resetLights}>
          <Text>Reset Lights</Text>
        </TouchableHighlight>
      </View>

    );
  }
}

let CIRCLE_RADIUS = 36;
let Window = Dimensions.get('window');
let styles = StyleSheet.create({
    mainContainer: {
        flex    : 1,
    },
    dropZone    : {
        height         : 100,
        backgroundColor:'#2c3e50'
    },
    text        : {
        marginTop   : 25,
        marginLeft  : 5,
        marginRight : 5,
        textAlign   : 'center',
        color       : '#fff'
    },
    room : {
      backgroundColor: '#e29a9a',
      height: 75,
      width: Window.width/3
    },
    draggableLight: {
        position    : 'absolute',
        top         : Window.height/2 - CIRCLE_RADIUS,
        left        : Window.width/2 - CIRCLE_RADIUS,
    },
    draggableRoom:{
        position    : 'absolute',
        top         : Window.height/3 - CIRCLE_RADIUS,
        left        : Window.width/2 - CIRCLE_RADIUS
    },
    circle      : {
        backgroundColor     : '#1abc9c',
        width               : CIRCLE_RADIUS*2,
        height              : CIRCLE_RADIUS*2,
        borderRadius        : CIRCLE_RADIUS
    }
});


export default RoomsIndex;
