import { connect } from 'react-redux';
import { selectLights } from '../../reducers/selectors';
import NavSliders from './nav_sliders';
import { fetchLights } from '../../actions/discover_actions';
import {
	turnAllLightsOff,
	turnAllLightsOn,
	changeBrightnessAll
} from '../../actions/light_actions';
import { Switch } from 'react-native';

const mapStateToProps = (state, ownProps) => {
	return {
  user: state.admin.user,
	lights: selectLights(state),
 	eventSwitchIsOn: false,
	eventSwitchRegressionIsOn: true
}};

const mapDispatchToProps = (dispatch) => {
	return {
  fetchLights: () => dispatch(fetchLights()),
	changeBrightnessAll: (user, int) => dispatch(changeBrightnessAll(user, int)),
	turnAllLightsOn: user => dispatch(turnAllLightsOn(user)),
	turnAllLightsOff: user => dispatch(turnAllLightsOff(user))
	}
};

const NavSlidersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavSliders);

export default NavSlidersContainer;
