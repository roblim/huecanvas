import { connect } from 'react-redux';
import {
        turnLightOff,
        turnLightOn,
        changeBrightness,
        increaseBrightness,
        decreaseBrightness,
        turnAllLightsOff,
        turnAllLightsOn,
        changeColor,
        changeTemperature
      } from '../../actions/light_actions';
import { blinkLight } from '../../util/lights_util';
import { selectLights } from '../../reducers/selectors';
import LightIndex from './light_index';

const mapStateToProps = (state, ownProps) => ({
  user: state.admin.user,
  lights: selectLights(state)
});

const mapDispatchToProps = (dispatch) => ({
  blinkLight: blinkLight,
  turnLightOn: (user, lightId) => dispatch(turnLightOn(user, lightId)),
  turnLightOff: (user, lightId) => dispatch(turnLightOff(user, lightId)),
  turnAllLightsOff: user => dispatch(turnAllLightsOff(user)),
  turnAllLightsOn: user => dispatch(turnAllLightsOn(user)),
  changeBrightness: (user, lightId, brightness) =>
    dispatch(changeBrightness(
      user,
      lightId,
      brightness
    )),
  increaseBrightness: (user, lightId, increment) =>
    dispatch(increaseBrightness(
      user,
      lightId,
      increment
    )),
  decreaseBrightness: (user, lightId, decrement) =>
    dispatch(decreaseBrightness(
      user,
      lightId,
      decrement
    )),
  changeColor: (user, lightId, rgbObject) =>
    dispatch(changeColor(
      user,
      lightId,
      rgbObject
    )),
  changeTemperature: (user, lightId, miredTemp) =>
    dispatch(changeTemperature(
      user,
      lightId,
      miredTemp
    )),
});

const LightIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LightIndex);

export default LightIndexContainer;
