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


class RoomsIndexLight extends Component {
  constructor(props){
    super(props);
    this.state={
      pan: new Animated.ValueXY(),
      showDraggable: this.props.showDraggable,
      dropZoneValues: this.props.dropZoneValues,
      dimensions:{}
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
    this.isDropZone = this.isDropZone.bind(this);
  }

  isDropZone(gesture){
      const dz = this.props.dropZoneValues;
      dz.height += 100;
      this.setState({
        dropZoneValues: dz
      });
      return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
  }
  render(){
    if(this.state.showDraggable){
      return(
        <Animated.View {...this.panResponder.panHandlers}
          style={this.state.pan.getLayout()}>
            <LightIndexItemContainer light={this.props.light}/>
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
        backgroundColor     : '#1abc9c',
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
