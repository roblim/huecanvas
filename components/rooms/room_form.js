// import ReactNativeComponentTree from 'react-native/Libraries/Renderer/src/renderers/native/ReactNativeComponentTree';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'

export default class RoomForm extends React.Component {
  constructor(props) {
		super(props);
		this.state = this.props.room;
		this.handleSubmit = this.handleSubmit.bind(this);
	}

  componentDidMount() {
		// if (this.props.navigation.state.params.roomId) {
		// 	this.props.fetchRoom(this.props.match.params.roomId)
		// }
	}

  componentWillReceiveProps(newProps) {
    this.setState(newProps.room)
  }

  update(field) {
		return (e) => {
      return this.setState({[field]: e.nativeEvent.text})
    }
	}

	handleSubmit(e) {
		e.preventDefault();
		//.then(() => this.props.history.push('/rooms'));;
	}

  render() {
    const name = this.state ? this.state.name : "";
    const { navigate } = this.props.navigation;
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

            <Button
              color='white'
              title="Save"
              onPress={this.handleSubmit}
            />

          <Button
            color="white"
            onPress={() => navigate('home')}
            title="Navigate to Home"
          />
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
    width: '50%'
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
    color: '#1ea52d',
  },
});
