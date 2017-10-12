import { connect } from 'react-redux';
import {
        turnLightOff,
        turnLightOn,
        changeBrightness,
        increaseBrightness,
        decreaseBrightness
      } from '../../actions/light_actions';
import { blinkLight } from '../../util/light_api_util';
import { selectLights } from '../../reducers/selectors';
import LightIndex from './light_index';

const mapStateToProps = (state, ownProps) => ({
  user: state.admin.user,
  lights: selectLights(state)
});

const mapDispatchToProps = (dispatch) => ({
  blinkLight: blinkLight,
  turnLightOff: (user, lightId) => dispatch(turnLightOff(user, lightId))
});

const LightIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LightIndex);

export default LightIndexContainer;
