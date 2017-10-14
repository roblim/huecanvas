import React, {Component} from 'react';
import { StyleSheet,
         Text,
         View,
         Button,
         TouchableOpacity,
         PanResponder,
         Animated,
         Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import RoomsFormContainer from './room_form_container';
import RoomsIndexContainer from './rooms_index_container';
import LightIndexContainer from '../light_index/light_index_container';


class RoomsIndexItem extends Component{
  constructor(props){
    super(props);
    this.state={
      isModalVisible: false,
      pan: new Animated.ValueXY(),
      showDraggable: this.props.showDraggable,
      dropZoneValues: null
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
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

  showModal(){
    this.setState({
      isModalVisible: true
    });
  }

  hideModal(){
    this.setState({
      isModalVisible: false
    });
  }
  renderModal(){
    return(
      <Modal isVisible={this.state.isModalVisible}>
        <Button onPress={()=> this.hideModal}
                title="Close"></Button>
        <LightIndexContainer/>
      </Modal>
    );
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
            <Button onPress={()=> this.showModal} title={room.name}/>
          </Animated.View>
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
