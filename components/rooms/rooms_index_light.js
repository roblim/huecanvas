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
      room:null,
      coords: {x: 0, y: 0}
    };
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: ()=> true,
      onPanResponderMove: Animated.event([null,{
        dx: this.state.pan.x,
        dy: this.state.pan.y
      }]),
      onPanResponderRelease: (e, gesture) =>{
        this.state.coords.x += this.state.pan.x._value;
        this.state.coords.y += this.state.pan.y._value;
        console.log(e.nativeEvent.pageY);

        // this.state.pan.setOffset({x: this.state.coords.x, y: this.state.coords.y});
        console.log("RELEASED");
        let rooms = this.props.rooms;
        console.log(rooms);
        if (Object.keys(this.props.rooms).length < 1){
          Animated.spring(
              this.state.pan,
              {toValue:{x:0,y:0}}

          ).start();
        } else {
          let coordinates = Object.values(rooms).map(room =>{
              return({ id: room.id, coords: room.coordinates });
          });
          // console.log("coordinates", coordinates);
          // console.log("gesturex", gesture.moveX);

          let whichCoordinates = coordinates.map((coord,idx) => {
            if(!coord.coords || Object.keys(coord.coords).length < 1){
              console.log('null');
              return null;
            }

            // console.log(gesture.moveY - 330);
            // console.log(Math.abs(this.state.coords.y));
            // gesture.moveY = gesture.moveY > 600 ? gesture.moveY - 300 : gesture.moveY
            console.log("pan coords", this.state.coords.y);
            console.log("greater than", coord.coords.absoluteY);
            console.log("gesture.moveY", gesture.moveY + 50);
            console.log("less than", coord.coords.absoluteY + coord.coords.height);
            // console.log(gesture.moveY > coord.coords.absoluteY);
            // console.log(gesture.moveY < coord.coords.absoluteY + coord.coords.height);
            // this.state.coords.y = this.state.coords.y <
            if (gesture.moveY + 50 > coord.coords.absoluteY && gesture.moveY + 50 < coord.coords.absoluteY + coord.coords.height){
              // console.log("gesture", gesture.moveX);
              // console.log("width", coord.coords.width);
              // console.log("dz", coord.coords.x);
              // console.log(((coord.coords.x) < gesture.moveX));
              // console.log(((coord.coords.x)+coord.coords.width > gesture.moveX));
              if ((Math.abs(coord.coords.x) < gesture.moveX) && (Math.abs(coord.coords.x)+coord.coords.width > gesture.moveX)){
                console.log(coord.id);
                return coord.id;
              }
              console.log(coord.id, "outside width");
              return null
            } else {
              console.log(coord.id, "outside height");
              return null;
            }
          });
          console.log(whichCoordinates);
          if(whichCoordinates.every(id => id === null)){
              Animated.spring(
                  this.state.pan,
                  {toValue:{x:0,y:0}}
              ).start();
          } else {
            // console.log("whichCoordinates", whichCoordinates);
            let roomId = whichCoordinates.filter(function(id) {
              console.log(id);
              return id !== null;
            });
            console.log(roomId);
            let newRoom = merge({}, this.props.rooms[roomId], {lights: {[this.props.light.lightId]:{lightId: this.props.light.lightId, canvasPosition: null}}});
            this.setState({
              room: newRoom
            });
            // console.log("this.state.room", newRoom);
            this.props.getCurrentRoom(newRoom);
            this.props.getDroppedLights(this.props.light);
            this.props.parentProps.updateRoom(newRoom);
              this.setState({
                showDraggable: false
              });
          }
        }
      this.state.coords = {x:0, y:0}
      // this.state.pan.setValue({x: 0, y: 0});
      }
    });
  }

  isDropZone(gesture){
    let rooms = this.props.rooms;
    let coordinates = Object.values(rooms).map(room =>{
        return(room.coordinates);
    });



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
    // console.log("checking for getCurrentRoom", this.props);
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
