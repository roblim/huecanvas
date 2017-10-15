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
	}

  componentDidMount() {
		// if (this.props.navigation.state.params.roomId) {
		// 	this.props.fetchRoom(this.props.match.params.roomId)
		// }
    console.log(this.that);
	}

  componentWillReceiveProps(newProps) {
    this.setState(newProps.room)
  }

  update(field) {
		return (e) => {
      return this.setState({room: {[field]: e.nativeEvent.text}, errors: ""})
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
                <Text style={styles.text}>Save</Text>
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
    marginTop: '50%'
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    fontSize: 20,
    textAlign: 'center',
    margin: 15,
    width: 345
  },
  saveBtn: {
    backgroundColor: '#1ea52d',
    padding: 15,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 15
  },
  text: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600'
  }
});
