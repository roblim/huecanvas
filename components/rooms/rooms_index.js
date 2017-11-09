import React, {Component} from 'react';
import { StyleSheet,
         Text,
         View,
         ScrollView,
         TouchableHighlight,
         PanResponder,
         Animated,
         Dimensions,
         Button} from 'react-native';
import Modal from "react-native-modal";
import RoomsIndexItem from './rooms_index_item';
import { AsyncStorage } from 'react-native';
import RoomFormContainer from './room_form_container';
import RoomsIndexLight from './rooms_index_light';
import merge from 'lodash/merge';
import DiscoverContainer from "../discover/discover_container";

class RoomsIndex extends Component{
  constructor(props){
    super(props);

    console.log("porps", props);

    this.state={
      lightpan: new Animated.ValueXY(),
      roompan: new Animated.ValueXY(),
      showDraggableLight: true,
      showDraggableRoom: true,
      dropZoneValuesLight: null,
      dropZoneValuesRoom: null,
      renderedLights: this.props.lights,
      renderedRooms: this.props.rooms,
      modalVisible: false,
      dropZones:[],
      sendToLightContainer: null,
      roomLights:null,
      droppedLights:[],
      coordinates: null,
      isModalVisible: false
    };

    this.renderRooms = this.renderRooms.bind(this);
    this.renderLights = this.renderLights.bind(this);
    this.renderDragArea = this.renderDragArea.bind(this);
    this.renderCreateRoom = this.renderCreateRoom.bind(this);
    this.resetLights = this.resetLights.bind(this);
    this.setLightDropZoneValues = this.setLightDropZoneValues.bind(this);
    this.removeRoom = this.removeRoom.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
}

  componentDidMount(){
    // AsyncStorage.clear();
    if (!this.props.bridge) {
      this.showModal();
    }
      this.props.fetchRooms();

  }

  showModal() {
    this.setState({ isModalVisible: true });
  }

  hideModal() {
    this.setState({ isModalVisible: false });
  }

  getCurrentRoom(currentRoom){
    this.setState({
      sendToLightContainer: currentRoom
    });
  }

  getDroppedLights(droppedLight){
    this.setState({
      droppedLights: [...this.state.droppedLights, droppedLight]
    });
  }

  // getThisLayout(event){
  //   // console.log("event", event.nativeEvent.layout);
  //   this.setState({ coordinates: event.nativeEvent.layout});
  // }



  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  // isLightDropZone(gesture){
  //   const dz = this.state.dropZoneValuesLight;
  //   return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
  // }

  isRoomDropZone(gesture){
    const dz = this.state.dropZoneValuesRoom;
    // console.log(this.state.dropZoneValuesRoom);
    // console.log(gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height);
    return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
  }

  setLightDropZoneValues(event){
    this.setState({
        dropZoneValuesLight: event.nativeEvent.layout,
        dropZones: [...this.state.dropZones, event.nativeEvent.layout]
    });
  }

  setRoomDropZoneValues(event){
    this.setState({
      dropZoneValuesRoom: event.nativeEvent.layout
    });
  }

  removeRoom(id){
    this.props.deleteRoom(id);
  }

  renderCreateRoom(){
    const { navigate } = this.props.navigation;
    const rooms = this.props.rooms;
    return(
      <View>
        <Button onPress={() => navigate('roomsNew')}
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
    if (!this.props.rooms || Object.keys(this.props.rooms).length < 1) { return null; }
    const rooms = this.props.rooms;
    const lights = this.props.lights;
    if(this.state.showDraggableRoom){
      return(
        <View >
          {
            Object.values(rooms).map(room =>{
              return(

                    <RoomsIndexItem
                      room={room}
                      rooms={rooms}
                      lights={lights}
                      showDraggable={this.state.showDraggableRoom}
                      dropZoneValues = {dropZoneValues}
                      key={room.id}
                      that={this}
                      setLightDropZoneValues={this.setLightDropZoneValues}
                      parentProps={this.props}
                      sendToLightContainer={this.state.sendToLightContainer}
                      removeRoom={id => this.removeRoom(id)}
                      coordinates={this.state.coordinates}
                  />


             );
            }
          )
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

  renderLights(dropZoneValues){
    // console.log("roomLights", this.state.roomLights);
    const lights = this.props.lights || [];
    if(this.state.showDraggableLight){
      return(
        <View style={styles.draggableLight}>
          {
            lights.map(light =>(

                  <RoomsIndexLight
                    key={`lightId-${light.lightId}`}
                    light={light}
                    showDraggable={this.state.showDraggableLight}
                    dropZoneValues={dropZoneValues}
                    dropZones={this.state.dropZones}
                    rooms={this.props.rooms}
                    parentProps = {this.props}
                    getCurrentRoom = {(currentRoom)=> this.getCurrentRoom(currentRoom)}
                    getDroppedLights={(droppedLight)=> this.getDroppedLights(droppedLight)}
                    />

            ))
          }
        </View>
      );
    }


  }
  render(){
    const { navigate } = this.props.navigation;


      return(
        <View>

            <Modal
              style={{
                      flex: 1,
                      backgroundColor: "rgba(33, 33, 33, .6)",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "auto",
                    }}
              isVisible={this.state.isModalVisible}
              backdropColor="rgba(33, 33, 33, .4)"
            >
              <DiscoverContainer
                hideModal={this.hideModal}
                showModal={this.showModal}
                navigate={navigate}
                toggleDisplay={this.toggleDisplay}
              />
            </Modal>

          {this.renderDragArea()}
          {this.renderCreateRoom()}
          {this.renderRooms(this.state.dropZoneValuesRoom)}
          {this.renderLights(this.state.dropZoneValuesLight)}
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
        flex:1,
        position    : 'absolute',
        top         : Window.height/3*2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    draggableRoom:{
        position    : 'absolute',
        top         : (Window.height/3)*2,
        left        : Window.width/2 - CIRCLE_RADIUS
    },
    circle      : {
        backgroundColor     : '#1abc9c',
        width               : CIRCLE_RADIUS*2,
        height              : CIRCLE_RADIUS*2,
        borderRadius        : CIRCLE_RADIUS
    },
    view :{
      height: 100
    },
    roomContainer:{
      width: Window.height/5,
      height: Window.height/6,
    }
});


export default RoomsIndex;
