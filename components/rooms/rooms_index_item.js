import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, PanResponder, Animated, Dimensions } from 'react-native';
import RoomsFormContainer from './room_form_container';


class RoomsIndexItem extends Component{
  constructor(props){
    super(props);
    this.state={
      pan: new Animated.ValueXY(),
      showDraggable: this.props.showDraggable,
      dropZoneValues: null
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
  isDropZone(gesture){
    const dz = this.props.dropZoneValues;
    return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
  }
  render(){
    const room = this.props.room;
    const lights = this.props.lights;
    return(
          <Animated.View {...this.panResponder.panHandlers} style={this.state.pan.getLayout()}>
            <Text style={styles.text}>{room.name}</Text>
          </Animated.View>
    );
  }
}

// const RoomsIndexItem =({room, lights}) =>{
//   return(
//       <View>
//         <Button title={room.name}></Button>
//       </View>
//   );
// };

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
