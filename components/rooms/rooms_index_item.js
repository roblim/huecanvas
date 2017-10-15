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
      that: this
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
    if(this.state.showDraggable){
      return(
          <Animated.View {...this.panResponder.panHandlers}
              style={[this.state.pan.getLayout(), styles.index]}>
            <Modal
                  animationType="slide"
                  transparent={false}
                  visible={this.state.modalVisible}>
              <View >
                <View>
                  <LightIndexContainer room={room} />
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
               <Text style={styles.text}>{room.name}</Text>
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
    backgroundColor: '#d15c94',
    width: Window.width/3,
    height: Window.height/8
  },
});
