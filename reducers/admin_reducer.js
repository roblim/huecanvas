import { RECEIVE_BRIDGE, RECEIVE_USERNAME } from "../actions/discover_actions";
import { merge } from "lodash";

export const AdminReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERNAME:
      return merge({}, state, action.user);
    case RECEIVE_BRIDGE:
    let bridge = action.bridge;
    let bridgeIP = action.bridgeIP;
    let newState = {
      bridge,
      bridgeIP
    }
      return merge({}, state, newState);
    default:
      return state
  }
};
