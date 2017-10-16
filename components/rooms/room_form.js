import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

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
    if (!this.state.room.id) {
      this.props.fetchRooms().then(res => {
        console.log(res.rooms);
        if (res.rooms !== null) {
      		let maxId = Object.keys(res.rooms).reduce((a, b) => {
      			return (Math.max(a, b))
      		})
          this.setState({room: {id: (parseInt(maxId) + 1)}})
          console.log(this.state.room);
      	} else {
      		this.setState({room: {id: 0}})
          console.log('hooray');
      	}
      })
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.room)
  }

  update(field) {
		return (e) => {
      return this.setState({room: {id: this.state.room.id, [field]: e.nativeEvent.text}, errors: ""})
    }
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.processForm(this.state.room)
		//.then(() => this.props.history.push('/rooms'));;
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
                if (this.state.room.name !== "") {
                  this.handleSubmit(e)
                  if (this.that) {
                    this.that.setModal2Visible(!this.modal2Visible);
                  } else {
                    const { navigate } = this.props.navigation;
                    navigate('roomsIndex')
                  }
                } else {
                  this.setState({errors: "This field is required"})
                  console.log("updated", this.state);
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
