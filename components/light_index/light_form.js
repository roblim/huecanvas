import React from 'react';
import { Text,
         View,
         StyleSheet,
         TouchableHighlight,
         TextInput } from 'react-native';

class LightForm extends React.Component {
  constructor(props) {
    super(props)

    this.light = this.props.light;
    this.user = this.props.user;

    this.state = {
      name: this.props.light.name
    }
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(name) {
    this.setState({ name })
    this.props.updateLightName(this.user, this.light.lightId, name)
  }

  render() {
    let { light } = this.props;
    let { user } = this.props;
    return(
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={this.handleTextChange}
          value={this.state.name}
        />
      </View>
    )
  }

}

export default LightForm;
