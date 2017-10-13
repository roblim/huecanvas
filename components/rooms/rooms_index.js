import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight, FlatList, PanResponder, Animated, Dimensions } from 'react-native';
import RoomsIndexItem from './rooms_index_item';
import { AsyncStorage } from 'react-native';

class RoomsIndex extends Component{
  constructor(props){
    super(props);
    this.state={
      pan: new Animated.ValueXY()
    };

    this.panResponderRoom = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null,{
        dx: this.state.pan.x,
        dy: this.state.pan.y
    }]),
    onPanResponderRelease: (e, gesture) => {

    }
    });

    this.panResponderLight = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null,{
          dx: this.state.pan.x,
          dy: this.state.pan.y
      }]),
      onPanResponderRelease: (e, gesture) => {
        Animated.spring(
            this.state.pan,
            {toValue:{x:0,y:0}}
        ).start();
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
      <View style={styles.dropZone}>
        <Text style={styles.text}>Drag Here To Delete Room</Text>
      </View>
    );
  }

  renderRooms(){
    const rooms = this.props.rooms;
    const lights = this.props.lights;
    return(
      <View>
        {
          Object.values(rooms).map(room =>(
            <View style={styles.draggableRoom}>
              <Animated.View {...this.panResponderRoom.panHandlers} style={[this.state.pan.getLayout(), styles.circle]} key={room.id}>
                <RoomsIndexItem room={room} lights={lights} key={room.id}/>
              </Animated.View>
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
  render(){
    return(
      <View style={styles.mainContainer}>
        {this.renderDragArea()}
        {this.renderCreateRoom()}
        {this.renderLights()}
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
    draggableLight: {
        position    : 'absolute',
        top         : Window.height/2 - CIRCLE_RADIUS,
        left        : Window.width/2 - CIRCLE_RADIUS,
    },
    draggableRoom:{
        position    : 'absolute',
        top         : Window.height/3 - CIRCLE_RADIUS,
        left        : Window.width/2 - CIRCLE_RADIUS,
        backgroundColor: '#2c3e50'
    },
    circle      : {
        backgroundColor     : '#1abc9c',
        width               : CIRCLE_RADIUS*2,
        height              : CIRCLE_RADIUS*2,
        borderRadius        : CIRCLE_RADIUS
    }
});


export default RoomsIndex;
