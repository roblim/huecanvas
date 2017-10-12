import merge from 'lodash/merge';
import { RECEIVE_LIGHT_STATE } from '../actions/light_actions';

export const LightReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LIGHT_STATE:
      console.log(state);
      let newLightState = merge({},
                               state[action.lightId].state,
                               action.lightState
                             );
      newState = merge({}, state, {[action.lightId]: newLightState});
      console.log(newState);
      return newState;
    default:
      return state;
  }
};
