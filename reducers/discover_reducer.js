import { RECEIVE_ALL_BRIDGES, RECEIVE_ALL_LIGHTS } from "../actions/discover_actions";
import { merge } from "lodash";

const DiscoverReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_BRIDGES:
      return merge({}, oldState, action.bridges);
    case RECEIVE_ALL_LIGHTS:
      return merge({}, oldState, action.lights)
    default:
      return oldState;
  }
}

export default DiscoverReducer;
