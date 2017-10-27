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
    this.state={
      modalVisible: false,
      modal2Visible: false,
      pan: new Animated.ValueXY(),
      showDraggable: this.props.showDraggable,
      dropZoneValues: this.props.dropZoneValues,
      showLight: false,
      that: this,
      layout: null,
      room: this.props.room,
    };
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: ()=> true,
      onPanResponderMove: Animated.event([null,{
        dx: this.state.pan.x,
        dy: this.state.pan.y
      }]),
      onPanResponderRelease: (e, gesture) =>{
        console.log("pan responder was released");
        if(this.isDropZone(gesture)){
          console.log("this is the room that was released", this.props.room);
          this.setState({
            showDraggable: false
          });
          this.props.removeRoom(this.props.room.id);

        } else {
      }}
    });

  }

  componentDidMount(){
    let newRoom = merge({}, this.state.room, {coordinates: this.props.coordinates});
    console.log("componentDidMount", newRoom);
    this.setState({
      room: newRoom
    });
    this.props.parentProps.updateRoom(this.state.room);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.coordinates === null) {
      let newRoom = merge({}, this.state.room, {coordinates: nextProps.coordinates});
      console.log("componentWillReceiveProps", newRoom);
      this.setState({
        room: newRoom
      });
      this.props.parentProps.updateRoom(this.state.room);
    }
  }

  getThisLayout(event){
    let newRoom = this.state.room;
    if (this.state.room.coordinates === null)
    {
      newRoom = merge({}, this.state.room, {coordinates: this.props.coordinates});
    } else {
      newRoom = merge({}, this.state.room, {coordinates: event.nativeEvent.layout});
    }

    this.setState({
      room: newRoom
    });
    this.props.parentProps.updateRoom(this.state.room);
  }


  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  setModal2Visible(visible) {
    this.setState({modal2Visible: visible});
  }

  isDropZone(gesture){
      const dz = this.props.dropZoneValues;
      return gesture.moveY < dz.height;
  }


  render(){
    const room = this.props.room;
    const lights = this.props.lights;
    const rooms = this.props.rooms;
    console.log(this.props.room);
    if(this.state.showDraggable){
      return(
          <Animated.View {...this.panResponder.panHandlers}
              style={[this.state.pan.getLayout(), styles.index]}
              onLayout={this.getThisLayout.bind(this)}>
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
         <Modal
               animationType="slide"
               transparent={false}
               visible={this.state.modal2Visible}>
           <View >
             <View>
               <RoomFormContainer rooms={rooms} room={room} that={this.state.that}/>
               <TouchableHighlight onPress={() => {
                 this.setModal2Visible(!this.state.modal2Visible);
                 }}>
                 <Text>Back</Text>
               </TouchableHighlight>

             </View>
           </View>
         </Modal>
           <TouchableWithoutFeedback onPress={() => {
             this.setModalVisible(true);
           }}
           onLongPress={() => {
             this.setModal2Visible(true);
           }}

           >
             <View>
               <Text style={styles.text}>{this.props.room.name}</Text>
             </View>
           </TouchableWithoutFeedback>



       </Animated.View>

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
    text        : {
        marginTop   : 22,
        marginLeft  : 5,
        marginRight : 5,
        textAlign   : 'center',
        color       : '#fff'
    },
  index:{
    backgroundColor: '#00baa6',
    width: Window.width/5,
    height: Window.height/6,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
});
