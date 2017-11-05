import React, {Component} from 'react';
import { StyleSheet,
         Text,
         View,
         Button,
         TouchableOpacity,
         PanResponder,
         Animated,
         Dimensions,
         Modal,
         TouchableWithoutFeedback,
         TouchableHighlight} from 'react-native';
import RoomFormContainer from './room_form_container';
import RoomsIndexContainer from './rooms_index_container';
import LightIndexContainer from '../light_index/light_index_container';
import merge from 'lodash/merge';

class RoomsIndexItem extends Component{
  constructor(props){
    super(props);
    let {x, y, height, width} = this.props.room.coordinates || {x: 0, y: 0}
    this.state={
      modalVisible: false,
      modal2Visible: false,
      pan: new Animated.ValueXY({x, y}),
      showDraggable: this.props.showDraggable,
      dropZoneValues: this.props.dropZoneValues,
      showLight: false,
      that: this,
      layout: null,
      room: this.props.room,
      coords: {x, y, height: height, width: width}
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: ()=> true,
      // onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      // onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
        return gestureState.dx != 0 && gestureState.dy != 0;
      },
      onPanResponderGrant: (e, gestureState) => {
        // this.state.coords.x = this.state.pan.x._value;
        // this.state.coords.y = this.state.pan.y._value;

        this.state.pan.setOffset({x: this.state.coords.x, y: this.state.coords.y});
        // let offSet = this.state.room.coordinates || {x: 0, y: 0}
        // let {x, y} = this.state.room.coordinates
        // console.log(x,y);
        // this.state.pan.setOffset({x, y});
        this.state.pan.setValue({x: 0, y: 0});
        return true
      },
      onPanResponderMove: Animated.event([null,{
        dx: this.state.pan.x,
        dy: this.state.pan.y
      }]),
      onPanResponderRelease: (e, gesture) =>{
        if(this.isDropZone(gesture)){
          // console.log("this is the room that was released", this.props.room);
          this.setState({
            showDraggable: false
          });
          this.props.removeRoom(this.props.room.id);

        } else {
          this.state.coords.x += this.state.pan.x._value;
          this.state.coords.y += this.state.pan.y._value;

          this.state.pan.setOffset({x: this.state.coords.x, y: this.state.coords.y});
          this.state.pan.setValue({x: 0, y: 0});
          // let x = gesture.moveX
          // let y = gesture.moveY
          // let newCoords = {x, y, height:128, width:205}
          // // this.state.room.coordinates  coords
          // let updated = merge(this.state.coords, newCoords)
          let newRoom = merge({}, this.state.room)
          // console.log(updated);
          // this.setState({coords: updated})
          // console.log(this.state.coords);
          // console.log("oldCoords", this.state.coords);
          // let y = e.nativeEvent.pageY
          let updatedCoords = merge({absoluteY: e.nativeEvent.pageY}, this.state.coords)
          // updatedCoords = merge(updatedCoords, {y})
          console.log("updatedCoords", updatedCoords);
          newRoom = merge(newRoom, {coordinates: updatedCoords})
          // console.log("updatedRoom", newRoom);
          this.setState({room: newRoom})
          this.props.parentProps.updateRoom(newRoom);
          // return true
          // console.log(newRoom);
          // console.log(gesture.moveX);
          // console.log(this.state.room);
      }}
    });

  }

  componentDidMount(){
    // if (!this.state.room.coordinates) {
    //   let newRoom = merge(this.state.room, {coordinates: this.props.coordinates});
    //   console.log("componentDidMount", newRoom);
    //   this.setState({
    //     room: newRoom
    //   });
    //   this.props.parentProps.updateRoom(this.state.room);
    // }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.room) {
      let newRoom = merge({}, this.state.room);
      newRoom = merge(newRoom, nextProps.room)
      this.setState({
        room: newRoom
      });
    }
    // if(this.state.room.coordinates === null || Object.keys(this.state.room.coordinates).length < 1) {
    //   let newRoom = merge(this.state.room, {coordinates: nextProps.coordinates});
    //   // console.log("componentWillReceiveProps", newRoom);
    //   this.setState({
    //     room: newRoom
    //   });
    //   // this.props.parentProps.updateRoom(this.state.room);
    // }
  }

  getThisLayout(event){
    let newRoom = this.props.room;
    // console.log(newRoom);
    if (this.state.room.coordinates === null)
    {
      newRoom = merge(this.state.room, {coordinates: this.props.coordinates});
    } else {
      newRoom = merge(this.state.room, {coordinates: event.nativeEvent.layout});
    }

    this.setState({
      room: newRoom
    });
    // this.props.parentProps.updateRoom(this.state.room);
  }


  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  setModal2Visible(visible) {
    this.setState({modal2Visible: visible});
  }

  isDropZone(gesture){
      const dz = this.props.dropZoneValues;
      console.log("dz.height", dz.height);
      return gesture.moveY < dz.height+100 && gesture.moveY != 0;
  }


  render(){
    const room = this.props.room;
    const lights = this.props.lights;
    const rooms = this.props.rooms;
    // console.log(this.props.room);
    if(this.state.showDraggable){
      return(
        <View>
          <Animated.View {...this.panResponder.panHandlers}
              style={this.state.pan.getLayout()}

              onLayout={this.getThisLayout.bind(this)}>


           <TouchableHighlight onPress={() => {
             this.setModalVisible(true);
           }}
           onLongPress={() => {
             this.setModal2Visible(true);
           }}
           style={styles.touchable}
           >
             <View style={styles.index}>
               <Text style={styles.text}>{this.props.room.name}</Text>
             </View>
           </TouchableHighlight>



         </Animated.View>
       <Modal
             animationType="slide"
             transparent={false}
             visible={this.state.modal2Visible}>
         <View >
           <View>
             <RoomFormContainer rooms={rooms} room={room} that={this.state.that} modal2Visible={this.state.modal2Visible}/>
           </View>
         </View>
       </Modal>

       <Modal
             animationType="slide"
             transparent={false}
             visible={this.state.modalVisible}>
         <View >
           <View>
             <LightIndexContainer room={this.props.sendToLightContainer} />
             <TouchableHighlight onPress={() => {
               this.setModalVisible(!this.state.modalVisible);
               }}>
               <Text>Back</Text>
             </TouchableHighlight>

           </View>
         </View>
       </Modal>
       </View>
      );
    } else {
      return(
        <View></View>
      );
    }

  }
}

export default RoomsIndexItem;
let Window = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchable:{
    flex: 1,
    padding: 20,
    borderRadius: 20
  },
    text        : {
        marginTop   : 40,
        marginLeft  : 5,
        marginRight : 5,
        fontSize    : 20,
        textAlign   : 'center',
        color       : '#fff'
    },
  index:{
    backgroundColor: '#00baa6',
    width: Window.width/5,
    height: Window.height/6,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    position: 'absolute'
  },
});
