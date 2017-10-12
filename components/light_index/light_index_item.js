import React from 'react';
import { Text,
				 View,
				 StyleSheet,
				 Button,
			   TouchableHighlight } from 'react-native';

class LightIndexItem extends React.Component {
  constructor(props) {
    super(props)

		this.turnLightOff = this.props.turnLightOff.bind(this);
  }

  render() {
    const { user } = this.props;
		const { light } = this.props;
    return(
      <TouchableHighlight
				style={styles.container}
        onPress={() => this.turnLightOff(user, light.lightId)}
        >
        <Text style={styles.welcome}>{light.name}</Text>
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
