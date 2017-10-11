import { RECEIVE_ALL_BRIDGES } from "../actions/discover_actions";
import { merge } from "lodash";

const DiscoverReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_BRIDGES:
      return merge({}, action.bridges);
    default:
      return oldState;
  }
}

export default DiscoverReducer;
