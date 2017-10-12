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
      <View>
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
