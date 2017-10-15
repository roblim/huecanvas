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
         TouchableHighlight} from 'react-native';

import RoomFormContainer from './room_form_container';
import RoomsIndexContainer from './rooms_index_container';
import LightIndexContainer from '../light_index/light_index_container';

class RoomsIndexItem extends Component{
  constructor(props){
    super(props);
    this.state={
      modalVisible: false,
      modal2Visible: false,
      pan: new Animated.ValueXY(),
      showDraggable: this.props.showDraggable,
      dropZoneValues: null,
      showLight: false
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: ()=> true,
      onPanResponderMove: Animated.event([null,{
        dx: this.state.pan.x,
        dy: this.state.pan.y
      }]),
      onPanResponderRelease: (e, gesture) =>{
        if(this.isDropZone(gesture)){
          this.setState({
            showDraggable: false
          });
        } else {
          Animated.spring(
            this.state.pan,
            {toValue:{x:0,y:0}}
          ).start();
        }
      }
    });
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  setModal2Visible(visible) {
    this.setState({modal2Visible: visible});
  }


  isDropZone(gesture){
    const dz = this.props.dropZoneValues;
    return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
  }
  render(){
    const room = this.props.room;
    const lights = this.props.lights;
    const rooms = this.props.rooms;
    return(
      <View>
        <View>
          <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {alert("Modal has been closed.")}}
                >
            <View >
              <View>
                <LightIndexContainer that={this} room={room} />
                <TouchableHighlight onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                  }}>
                  <Text>Back</Text>
                </TouchableHighlight>

              </View>
            </View>
          </Modal>
       <Modal
             animationType="slide"
             transparent={false}
             visible={this.state.modal2Visible}
             onRequestClose={() => {alert("Modal has been closed.")}}
             >
         <View >
           <View>
             <RoomFormContainer rooms={rooms} room={room}/>
           </View>
         </View>
       </Modal>

       <TouchableHighlight onPress={() => {
         this.setModalVisible(true);
       }}
       onLongPress={() => {
         this.setModal2Visible(true);
       }}

       >
         <Text>{room.name}</Text>
       </TouchableHighlight>

     </View>

      </View>
    );
  }
}

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
});
