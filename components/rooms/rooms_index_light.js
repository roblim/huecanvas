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
  _panResponder = {};
	// _previousLeft = 0;
	// _previousTop = 0;
  _circleStyles = {};
	circle = null

  constructor(props){
    super(props);
    this.state = {
      moveX: 0,
      moveY: 0,
      x0: 0,
      y0: 0,
      dx: 0,
      dy: 0,
      vx: 0,
      vy: 0,
      _previousLeft: 0,
      _previousTop: 0,
      showDraggable: this.props.showDraggable,
      dropZoneValues: this.props.dropZoneValues,
      rooms: this.props.rooms,
      room:null,
    };
    // let Window = Dimensions.get('window');
    // console.log(this.props.length);
    // let items = this.props.length || 0
    // let startX = (Window.width/12 * items)
    // this.state={
    //   pan: new Animated.ValueXY({x: startX, y: 0}),
    //   showDraggable: this.props.showDraggable,
    //   dropZoneValues: this.props.dropZoneValues,
    //   panResponder: null,
    //   rooms: this.props.rooms,
    //   room:null,
    //   coords: {x: startX, y: 0}
    // };
    // this.panResponder = PanResponder.create({
    //   onStartShouldSetPanResponder: ()=> true,
    //   onPanResponderMove: Animated.event([null,{
    //     dx: this.state.pan.x,
    //     dy: this.state.pan.y
    //   }]),
    //   onPanResponderGrant: (e, gesture) => {
    //     this.state.pan.setOffset({x: this.state.coords.x, y: this.state.coords.y});
    //     this.state.pan.setValue({x: 0, y: 0});
    //     // return true
    //   },
    //   onPanResponderRelease: (e, gesture) =>{
    //     this.state.coords.x += this.state.pan.x._value;
    //     this.state.coords.y += this.state.pan.y._value;
    //     console.log(e.nativeEvent.pageY);
    //     // this.state.pan.setOffset({x: this.state.coords.x, y: this.state.coords.y});
    //     console.log("RELEASED");
    //     let rooms = this.props.rooms;
    //     console.log(rooms);
        // if (Object.keys(this.props.rooms).length < 1){
        //   Animated.spring(
        //       this.state.pan,
        //       {toValue:{x:startX,y:0}}
        //   ).start();
        //   this.state.coords = {x:startX, y:0}
        // } else {
        //   let coordinates = Object.values(rooms).map(room =>{
        //       return({ id: room.id, coords: room.coordinates });
        //   });
        //   // console.log("coordinates", coordinates);
        //   // console.log("gesturex", gesture.moveX);
        //
        //   let whichCoordinates = coordinates.map((coord,idx) => {
        //     if(!coord.coords || Object.keys(coord.coords).length < 1){
        //       console.log('null');
        //       return null;
        //     }
        //
        //     // console.log(gesture.moveY - 330);
        //     // console.log(Math.abs(this.state.coords.y));
        //     // gesture.moveY = gesture.moveY > 600 ? gesture.moveY - 300 : gesture.moveY
        //     console.log("pan coords", this.state.coords.y);
        //     console.log("greater than", coord.coords.absoluteY);
        //     console.log("gesture.moveY", gesture.moveY + 50);
        //     console.log("less than", coord.coords.absoluteY + coord.coords.height);
        //     // console.log(gesture.moveY > coord.coords.absoluteY);
        //     // console.log(gesture.moveY < coord.coords.absoluteY + coord.coords.height);
        //     // this.state.coords.y = this.state.coords.y <
        //     if (gesture.moveY + 50 > coord.coords.absoluteY && gesture.moveY + 50 < coord.coords.absoluteY + coord.coords.height){
        //       // console.log("gesture", gesture.moveX);
        //       // console.log("width", coord.coords.width);
        //       // console.log("dz", coord.coords.x);
        //       // console.log(((coord.coords.x) < gesture.moveX));
        //       // console.log(((coord.coords.x)+coord.coords.width > gesture.moveX));
        //       if ((Math.abs(coord.coords.x) < gesture.moveX) && (Math.abs(coord.coords.x)+coord.coords.width > gesture.moveX)){
        //         console.log(coord.id);
        //         return coord.id;
        //       }
        //       console.log(coord.id, "outside width");
        //       return null
        //     } else {
        //       console.log(coord.id, "outside height");
        //       return null;
        //     }
        //   });
        //   console.log(whichCoordinates);
        //   if(whichCoordinates.every(id => id === null)){
        //       Animated.spring(
        //           this.state.pan,
        //           {toValue:{x:xStart,y:0}}
        //       ).start();
        //   } else {
        //     // console.log("whichCoordinates", whichCoordinates);
        //     let roomId = whichCoordinates.filter(function(id) {
        //       console.log(id);
        //       return id !== null;
        //     });
        //     console.log(roomId);
        //     let newRoom = merge({}, this.props.rooms[roomId], {lights: {[this.props.light.lightId]:{lightId: this.props.light.lightId, canvasPosition: null}}});
        //     this.setState({
        //       room: newRoom
        //     });
        //     this.props.getCurrentRoom(newRoom);
        //     this.props.getDroppedLights(this.props.light);
        //     // console.log("this.state.room", newRoom);
        //     this.props.parentProps.updateRoom(newRoom);
        //       this.setState({
        //         showDraggable: false
        //       });
        //   }
        // }
    //   this.state.coords = {x:startX, y:0}
    //   // this.state.pan.setValue({x: 0, y: 0});
    //   }
    // });
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
			onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
			onPanResponderGrant: this._handlePanResponderGrant,
			onPanResponderMove: this._handlePanResponderMove,
			onPanResponderRelease: this._handlePanResponderEnd,
			onPanResponderTerminate: this._handlePanResponderEnd
    });
    let Window = Dimensions.get('window');
		this.state._previousLeft = 0;
		this.state._previousTop = 0;
		this._circleStyles = {
			style: { left: this.state._previousLeft, top: this.state._previousTop }
		};
  }

  componentDidMount() {
		this._updatePosition();
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

  _updatePosition = () => {
		this.circle && this.circle.setNativeProps(this._circleStyles);
	};

	_handleStartShouldSetPanResponder = (event, gestureState) => {
		// Should we become active when the user presses down on the circle?
		// return true;
	};

	_handleMoveShouldSetPanResponder = (event, gestureState) => {
		// Should we become active when the user moves a touch over the circle?
		if (gestureState.numberActiveTouches === 1) {
			return true; } else { return false; }
	};

	_handlePanResponderGrant = (event, gestureState) => {
		// this._highlight();
	};

	_handlePanResponderMove = (event, gestureState) => {
		this.setState({
			stateID: gestureState.stateID,
			moveX: gestureState.moveX,
			moveY: gestureState.moveY,
			x0: gestureState.x0,
			y0: gestureState.y0,
			dx: gestureState.dx,
			dy: gestureState.dy,
			vx: gestureState.vx,
			vy: gestureState.vy,
			numberActiveTouches: gestureState.numberActiveTouches,
			_previousLeft: this.state._previousLeft,
			_previousTop: this.state._previousTop
		});

		// Calculate current position using deltas
		this._circleStyles.style.left = this.state._previousLeft + gestureState.dx;
		this._circleStyles.style.top = this.state._previousTop + gestureState.dy;
		this._updatePosition();
	};

	_handlePanResponderEnd = (event, gesture) => {
		// this._unHighlight();
		this._previousLeft += gesture.dx;
		this._previousTop += gesture.dy;
    console.log("RELEASED");
    let rooms = this.props.rooms;
    console.log(rooms);
    if (Object.keys(this.props.rooms).length < 1){
      this.setState({
        stateID: gesture.stateID,
        moveX: 0,
        moveY: 0,
        x0: 0,
        y0: 0,
        dx: 0,
        dy: 0,
        vx: 0,
        vy: 0,
        showDraggable: this.props.showDraggable,
        dropZoneValues: this.props.dropZoneValues,
        rooms: this.props.rooms,
        room:null,
        numberActiveTouches: gesture.numberActiveTouches,
        _previousLeft: 0,
  			_previousTop: 0
    })
    this._circleStyles.style.left = 0;
    this._circleStyles.style.top = 0;
    this._updatePosition();
    console.log("true");
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
        // console.log("pan coords", this.state.coords.y);
        // console.log("greater than", coord.coords.absoluteY);
        // console.log("gesture.moveY", gesture.moveY + 50);
        // console.log("less than", coord.coords.absoluteY + coord.coords.height);
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
          this.setState({
          stateID: gesture.stateID,
          moveX: 0,
          moveY: 0,
          x0: 0,
          y0: 0,
          dx: 0,
          dy: 0,
          vx: 0,
          vy: 0,
          showDraggable: this.props.showDraggable,
          dropZoneValues: this.props.dropZoneValues,
          rooms: this.props.rooms,
          room:null,
          numberActiveTouches: gesture.numberActiveTouches,
          _previousLeft: 0,
    			_previousTop: 0
        })
        this._circleStyles.style.left = 0;
    		this._circleStyles.style.top = 0;
        // this._previousLeft = 0;
        // this._previousTop = 0;
        this._updatePosition();
        console.log("true");
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
        this.props.getCurrentRoom(newRoom);
        this.props.getDroppedLights(this.props.light);
        // console.log("this.state.room", newRoom);
        this.props.parentProps.updateRoom(newRoom);
          this.setState({
            showDraggable: false
          });
      }
    }
	};


  render(){
    // console.log("checking for getCurrentRoom", this.props);
    let light = this.props.light;
    if(this.state.showDraggable){
      return(
        <View style={styles.wrapper}>
            <View
              ref={circle => {
                this.circle = circle;
              }}
              style={styles.circle}
              {...this._panResponder.panHandlers}>
              <Text style={styles.text}>{this.props.light.name}</Text>

            </View>
        </View>
      );
    } else {
      return(
        <View></View>
      );
    }

  }
}

export default RoomsIndexLight;
let Window = Dimensions.get('window');
let CIRCLE_RADIUS = Window.width/17;
let styles = StyleSheet.create({
    circle      : {
        backgroundColor     : '#ffd677',
        width               : CIRCLE_RADIUS*2,
        height              : CIRCLE_RADIUS*2,
        borderRadius        : CIRCLE_RADIUS,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text        : {
        marginLeft  : 5,
        marginRight : 5,
        textAlign   : 'center',
        color       : 'black',
        fontSize    : 18

    },
    wrapper: {
      alignSelf: 'flex-start'
    }
});
