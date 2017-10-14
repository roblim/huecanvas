import { connect } from 'react-redux';
import TabNavigator from './navigator';
import { addNavigationHelpers } from 'react-navigation';
import React, { Component } from 'react';

// @connect(state => ({nav: state.navigation, navigation: state.navigation, data: state.data}))
class AppContainer extends Component {
	render(): ReactElement {
		const { dispatch, nav } = this.props;
		// console.log(this.props);
		const navigation = addNavigationHelpers({dispatch, state: nav.navigation});
		// using AppNavigator instead of TabNavigator in the line below will make it pop
		// console.log(navigation);
		return (
			<TabNavigator navigation={navigation} />
		)
	}
}

const mapStateToProps = state => {
	// console.log(state.navigation);
	return {nav: state}
};
export default connect(mapStateToProps)(AppContainer);
