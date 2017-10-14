import React from 'react';
import { Text,
         View,
         StyleSheet,
         TouchableHighlight,
         TextInput } from 'react-native';

class LightForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.light.name
    }
  }

  render() {
    let { light } = this.props;
    let { user } = this.props;
    return(
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
        />
        <TouchableHighlight
          onPress={() => this.props.updateLightName(user, light.lightId, this.state.name)}
        >
        <Text>Change Light Name</Text>
        </TouchableHighlight>
      </View>
    )
  }

}

export default LightForm;
