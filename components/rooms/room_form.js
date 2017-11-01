import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import merge from 'lodash/merge';

export default class RoomForm extends React.Component {
  constructor(props) {
		super(props);
		this.state = {room: this.props.room, errors: ""};
		this.handleSubmit = this.handleSubmit.bind(this);
    this.modal2Visible = this.props.modal2Visible
    this.that = this.props.that;
    this.rooms = this.props.rooms
	}

  componentWillMount() {
    if (this.props.formType == 'new') {
      this.props.fetchRooms().then(res => {
        console.log(res.rooms);
        if (Object.keys(res.rooms).length > 0) {
          console.log("FUCK");
      		let maxId = Object.keys(res.rooms).reduce((a, b) => {
      			return (Math.max(a, b))
      		})
          let updatedRoom = merge(this.state.room, {id: (parseInt(maxId) + 1)})
          this.setState({room: updatedRoom})
          // console.log('room form', this.state.room);
      	} else {
          let updatedRoom = merge(this.state.room, {id: 0})
      		this.setState({room: {id: 0}});
          // console.log('hooray');
      	}
      })
    }
  }

  componentWillReceiveProps(newProps) {
    let updated = merge(this.state.room, newProps.room)
    this.setState({room: updated})
  }

  update(field) {
		return (e) => {
      // console.log(this.state.room);
      // let updated = merge(this.state.room, {[field]: e.nativeEvent.text})
      // console.log({room: updated});
      return this.setState(merge(this.state.room, {[field]: e.nativeEvent.text}))
      // console.log(this.state.room);
    }
	}

	handleSubmit(e) {
		e.preventDefault();
    console.log(this.props.processForm);
    console.log(this.state.room);
		this.props.processForm(this.state.room).then(() => {
      if (this.that) {
        this.that.setModal2Visible(!this.modal2Visible);
      } else {
        const { navigate } = this.props.navigation;
        navigate('roomsIndex')
      }
    })
	}

  setModal2Visible(visible) {
    this.setState({modal2Visible: visible});
  }

  render() {
    const name = this.state.room ? this.state.room.name : "";
    //if (this.props.shouldRender) {
      return(
        <View style={styles.container}>
            <FormInput
              onChange={this.update('name')}
              required
              type="text"
              value={name}
              style={styles.input}
              placeholder="Name this room" />

            <FormValidationMessage>
              {this.state.errors}
            </FormValidationMessage>

            <TouchableHighlight style={styles.saveBtn} onPress={(e) => {
                if (!!this.state.room.name) {
                  this.handleSubmit(e)
                } else {
                  this.setState({errors: "This field is required"})
                  // console.log("updated", this.state);
                }
                }}>
                <Text style={styles.saveText}>Save</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.backBtn} onPress={(e) => {
                if (this.that) {
                  this.that.setModal2Visible(!this.modal2Visible);
                } else {
                  const { navigate } = this.props.navigation;
                  navigate('roomsIndex')
                }
              }}>
              <Text style={styles.backText}>{'<'}</Text>
            </TouchableHighlight>
        </View>
      )
    //} else {
    //   return <View></View>;
    // }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4286f4',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    alignSelf: 'center',
    marginTop: '25%',
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    fontSize: 20,
    textAlign: 'center',
    margin: 15,
    marginTop: 60,
    width: 345
  },
  saveBtn: {
    backgroundColor: '#1ea52d',
    padding: 15,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 15
  },
  backBtn: {
    position: 'absolute',
    left: 15,
    top: -5,
  },
  backText: {
    fontSize: 40,
    color: '#ffffff',
    fontWeight: '600'
  },
  saveText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600'
  }
});
