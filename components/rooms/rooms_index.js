import React, {Component} from 'react';
import { StyleSheet,
         Text,
         View,
         ScrollView,
         TouchableHighlight,
         PanResponder,
         Animated,
         Dimensions,
         Button,
         Modal } from 'react-native';
import RoomsIndexItem from './rooms_index_item';
import { AsyncStorage } from 'react-native';
import RoomFormContainer from './room_form_container';


class RoomsIndex extends Component{
  constructor(props){
    super(props);
    this.state={
      lightpan: new Animated.ValueXY(),
      roompan: new Animated.ValueXY(),
      showDraggableLight: true,
      showDraggableRoom: true,
      dropZoneValuesLight: null,
      dropZoneValuesRoom: null,
      renderedLights: [],
      renderedRooms: [],
      modalVisible: false
    };

    this.panResponderLight = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null,{
          dx: this.state.lightpan.x,
          dy: this.state.lightpan.y
      }]),
      onPanResponderRelease: (e, gesture) => {
        if(this.isLightDropZone(gesture)){
          this.setState({
              showDraggableLight: false
          });
        }else{
          Animated.spring(
              this.state.lightpan,
              {toValue:{x:0,y:0}}
          ).start();
        }
      }
    });

    this.panResponderRoom = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null,{
          dx: this.state.roompan.x,
          dy: this.state.roompan.y
      }]),
      onPanResponderRelease: (e, gesture) => {
        if(this.isRoomDropZone(gesture)){
          this.setState({
              showDraggableRoom: false
          });
        }else{
          Animated.spring(
              this.state.roompan,
              {toValue:{x:0,y:0}}
          ).start();
        }
      }
    });

    this.renderRooms = this.renderRooms.bind(this);
    this.renderLights = this.renderLights.bind(this);
    this.renderDragArea = this.renderDragArea.bind(this);
    this.renderCreateRoom = this.renderCreateRoom.bind(this);
    this.resetLights = this.resetLights.bind(this);
}

  componentWillMount(){
    this.props.fetchRooms();
    this.props.fetchLights();
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


  isLightDropZone(gesture){
    const dz = this.state.dropZoneValuesLight;
    return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
  }

  isRoomDropZone(gesture){
    const dz = this.state.dropZoneValuesRoom;
    return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
  }

  setLightDropZoneValues(event){
    this.setState({
        dropZoneValuesLight: event.nativeEvent.layout
    });
  }

  setRoomDropZoneValues(event){
    this.setState({
      dropZoneValuesRoom: event.nativeEvent.layout
    });
  }

  renderCreateRoom(){
    const rooms = this.props.rooms;
    return(
      <View>
        <Button onPress={() => this.setModalVisible(true)}
              title="Create New Room"
        />
      </View>
    );
  }

  renderDragArea(){
    return(
      <View style={styles.dropZone} onLayout={this.setRoomDropZoneValues.bind(this)}>
        <Text style={styles.text}>Drag Here To Delete Room</Text>
      </View>
    );
  }

  renderRooms(dropZoneValues){
    if (!this.props.rooms) { return null; }

    const rooms = this.props.rooms;
    const lights = this.props.lights;
    if(this.state.showDraggableRoom){
      return(
        <View onLayout={this.setLightDropZoneValues.bind(this)} >
          {
            Object.values(rooms).map(room =>(
              <View>

                  <RoomsIndexItem
                    room={room}
                    rooms={rooms}
                    lights={lights}
                    showDraggable={this.state.showDraggableRoom}
                    dropZoneValues = {dropZoneValues}
                    key={room.id}
                />
                <Text></Text>
             </View>
            ))
          }
        </View>
      );
    }

  }

  resetLights(){
    this.setState({
      showDraggableLight: true,
      showDraggableRoom: true,
    });
    Animated.spring(
        this.state.lightpan,
        {toValue:{x:0,y:0}}
    ).start();
    Animated.spring(
      this.state.roompan,
      {toValue:{x:0, y:0}}
    ).start();
  }

  renderLights(){
    const { navigate } = this.props.navigation;
    const lights = this.props.lights;
    if(this.state.showDraggableLight){
      return(
        <View style={styles.draggableLight}>
          {
            Object.values(lights).map(light =>(
              <View>
                <Animated.View {...this.panResponderLight.panHandlers}
                  style={[this.state.lightpan.getLayout(), styles.circle]}
                  key={light.id + "light"}
                >
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
    if(this.props.rooms){
      return(
        <View >
          <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {alert("Modal has been closed.")}}
                >
            <View >
              <View>
                <RoomFormContainer rooms={this.props.rooms} that={this.state.that}/>
                <TouchableHighlight onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                  }}>
                  <Text>Back</Text>
                </TouchableHighlight>

              </View>
            </View>
          </Modal>
          {this.renderDragArea()}
          {this.renderCreateRoom()}
          {this.renderRooms(this.state.dropZoneValuesRoom)}
          {this.renderLights()}
          <TouchableHighlight onPress={this.resetLights}>
            <Text>Reset Lights</Text>
          </TouchableHighlight>
        </View>

      );
    } else {
      return(
        <View style={styles.mainContainer}>
        </View>
      );

    }}

}

let CIRCLE_RADIUS = 36;
let Window = Dimensions.get('window');
let styles = StyleSheet.create({
    mainContainer: {
        flex    : 1,
    },
    dropZone    : {
        height         : 100,
        backgroundColor: '#9e9e9e'
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flexWrap: 'wrap'
    },
    draggableRoom:{
        position    : 'absolute',
        top         : (Window.height/3)*2 - CIRCLE_RADIUS,
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
