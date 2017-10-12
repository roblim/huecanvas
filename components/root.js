import React from 'react';
import { View, Text } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import AppNavigator from '../util/nav_config_util'

export default class Root extends React.Component {
  render() {
    return (
			<View>
        <AppNavigator navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
        })} />
			</View>
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});
