import React from 'react';
import { Text,
				 View,
				 StyleSheet,
				 Button,
			   TouchableHighlight } from 'react-native';

class LightIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <TouchableHighlight
				style={styles.container}
        onPress={this.props.turnLightOff.bind(this, this.props.user, this.props.light.lightId)}
        >
        <Text style={styles.welcome}>{this.props.light.name}</Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
		flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: 'pink',
    width: 90,
    height: 90,
		borderRadius: 45
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
		color: 'teal',
		fontWeight: 'bold'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default LightIndexItem;
