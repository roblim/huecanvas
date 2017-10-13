import merge from 'lodash/merge';
import { RECEIVE_LIGHT_STATE,
         TURN_ALL_LIGHTS_OFF,
         TURN_ALL_LIGHTS_ON
        } from '../actions/light_actions';
import { RECEIVE_ALL_LIGHTS } from '../actions/discover_actions';

const LightReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_LIGHTS:
      let newState = merge({}, state);
      let lights = action.lights;
      let lightIds = Object.keys(lights);
      lightIds.forEach(id => lights[id]['lightId'] = id);
      return merge({}, newState, lights);
    case RECEIVE_LIGHT_STATE:
      let newLightState = merge({},
                               state[action.lightId].state,
                               action.lightState
                             );
      newState = merge({}, state, {[action.lightId]: {state: newLightState}});
      return newState;
    case TURN_ALL_LIGHTS_OFF:
      newState = merge({}, state);
      let offLightIds = Object.keys(newState);
      offLightIds.forEach(id => newState[id].state.on = false);
      return newState;
    case TURN_ALL_LIGHTS_ON:
      newState = merge({}, state);
      let onLightIds = Object.keys(newState);
      onLightIds.forEach(id => newState[id].state.on = true);
      return newState;
    default:
      return state;
  }
};

export default LightReducer;
