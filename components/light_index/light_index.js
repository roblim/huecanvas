import React from 'react';
import LightIndexItemContainer from './light_index_item_container';
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
		if (this.props.lights.length < 1) { return null;}
    return(
      <View style={{paddingTop: 50}}>
        {this.props.lights.map((light, idx) =>
				(
          <LightIndexItemContainer
						light={light}
            key={`light-${idx}`}
          />
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
		paddingTop: 50,
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