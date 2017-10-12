import React from 'react';
import LightIndexItem from './light_index_item';
import { Text,
				 View,
				 StyleSheet,
				 Button,
			   TouchableHighlight } from 'react-native';

class LightIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.container}>
        {this.props.lights.map((light, idx) => (
          <LightIndexItem light={light}
                          key={`light-${idx}`}
                          blinkLight={this.props.blinkLight}
                          turnLightOff={this.props.turnLightOff}
                          user={this.props.user} />
        )
      )}
      </View>
    )
  }
}

export default LightIndex;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
		alignContent: 'center',
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
