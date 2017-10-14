import { connect } from 'react-redux';
import { selectLights } from '../../reducers/selectors';
import NavSliders from './nav_sliders';
import { fetchLights } from '../../actions/discover_actions';
import {
	turnAllLightsOff,
	turnAllLightsOn
} from '../../actions/light_actions';
import { Switch } from 'react-native';

const mapStateToProps = (state, ownProps) => ({
  user: state.admin.user,
  lights: selectLights(state),
	eventSwitchIsOn: false,
	eventSwitchRegressionIsOn: true
});

const mapDispatchToProps = (dispatch) => ({
  fetchLights: () => dispatch(fetchLights()),
	turnAllLightsOn: user => dispatch(turnAllLightsOn()),
	turnAllLightsOff: user => dispatch(turnAllLightsOff())
});

const NavSlidersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavSliders);

export default NavSlidersContainer;
