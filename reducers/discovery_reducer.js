import { RECEIVE_ALL_BRIDGES } from "../actions/discover_actions";

const DiscoverReducer = (oldState = {}, action) {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_SCENES:
      return merge({}, action.scenes);
    default:
      return oldState;
  }
}
