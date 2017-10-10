import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View, Button } from 'react-native';
import jsHue from "jshue";


const hue = jsHue();
=======
import { StyleSheet, Text, View } from 'react-native';
import LightIndexContainer from './components/light_index/light_index_container.js';
>>>>>>> 366bced33797808f33c71fc84b2b8bec2c11ec25

export default class App extends React.Component {

  getBridges() {
    hue.discover().then(bridges => {

    if(bridges.length === 0) {
      console.log(bridges.length);
      return (
        <Text>dexx</ Text>
      )
        console.log('No bridges found. :(');
    }
    else {
        bridges.forEach(b => console.log('Bridge found at IP address %s.', b.internalipaddress));
    }
}).catch(e => console.log('Error finding bridges', e));
  }

  render() {
    return (
      <View style={styles.container}>
<<<<<<< HEAD
        <Button onPress={() => this.getBridges()}
                title="discover"
          />
        <Text>Hello</ Text>
=======
        <LightIndexContainer />
>>>>>>> 366bced33797808f33c71fc84b2b8bec2c11ec25
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
