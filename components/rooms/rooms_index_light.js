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
import LightIndexItemContainer from '../light_index/light_index_item_container';
import merge from 'lodash/merge';


class RoomsIndexLight extends Component {
  constructor(props){
    super(props);
    this.state={
      pan: new Animated.ValueXY(),
      showDraggable: this.props.showDraggable,
      dropZoneValues: this.props.dropZoneValues,
      panResponder: null,
      rooms: this.props.rooms,
      room:null
    };
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: ()=> true,
      onPanResponderMove: Animated.event([null,{
        dx: this.state.pan.x,
        dy: this.state.pan.y
      }]),
      onPanResponderRelease: (e, gesture) =>{
        let rooms = this.props.rooms;
        let coordinates = Object.values(rooms).map(room =>{
            return(room.coordinates);

        });
        let whichCoordinates = coordinates.map((coord,idx) => {
          if (Math.abs(coord.y)+167 < gesture.moveY && Math.abs(coord.y)+coord.height+167 > gesture.moveY){
            return idx;
          }
        });
        console.log(whichCoordinates);
        let droppedRoomIndex = whichCoordinates.filter(function(obj) {
          return obj !== undefined;
        });
        droppedRoomIndex = droppedRoomIndex[0];
        console.log(droppedRoomIndex);
        console.log(this.props.rooms[droppedRoomIndex]);
        console.log("lightid", this.props.light.lightId);
        let newRoom = merge({}, this.props.rooms[droppedRoomIndex], {lights: {[this.props.light.lightId]:{lightId: this.props.light.lightId, canvasPosition: null}}});
        this.setState({
          room: newRoom
        });
        this.props.parentProps.updateRoom(newRoom);
        if(this.isDropZone(gesture)){
          this.setState({
            showDraggable: false
          });
          //on release, determine if gesture is within each room's coordinates
          // if gesture is within room coordinates, set the currentroom's list of lights to be the light id
        } else {
          Animated.spring(
            this.state.pan,
            {toValue:{x:0,y:0}}
          ).start();
        }
      }
    });
  }

  isDropZone(gesture){
      // const dz = this.props.dropZoneValues;
      // // const thisZone = this.props.dropZones.map(dropZone =>{
      // //     return(
      // //       dropZone
      // //     );
      // //
      // // });
      // // const fixedDropZones = thisZone.forEach(dropZone =>{
      // //   dropZone.height = 100;
      // // });
      // // console.log(fixedDropZones);
      // // const last = thisZone.find(dropZone =>{
      // //   console.log("dropZone-y",dropZone.y);
      // //   console.log("dropZoney+height", dropZone.y+dropZone.height);
      // //   console.log("gesture.moveY", gesture.moveY);
      // //   console.log();
      // //   if((dropZone.y < gesture.moveY) && (dropZone.y+dropZone.height > gesture.moveY)){
      // //     return(
      // //       dropZone
      // //     );
      // //   }
      // // });
      // //
      // // console.log("last", last);
      //
      // dz.height += 200;
      // dz.y = 200;
      // this.setState({
      //   dropZoneValues: dz
      // });
      // return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
      return true;
  }

  render(){
    let light = this.props.light;
    if(this.state.showDraggable){
      return(
        <Animated.View {...this.panResponder.panHandlers}
          style={[this.state.pan.getLayout(), styles.circle]}>
            <Text style={styles.text}>{this.props.light.name}</Text>
        </Animated.View>
      );
    } else {
      return(
        <View></View>
      );
    }

  }
}

export default RoomsIndexLight;

let CIRCLE_RADIUS = 36;
let Window = Dimensions.get('window');
let styles = StyleSheet.create({
    circle      : {
        backgroundColor     : '#00000030',
        width               : CIRCLE_RADIUS*2,
        height              : CIRCLE_RADIUS*2,
        borderRadius        : CIRCLE_RADIUS
    },
    text        : {
        marginTop   : 22,
        marginLeft  : 5,
        marginRight : 5,
        textAlign   : 'center',
        color       : '#fff'
    }
});
