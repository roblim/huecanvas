import { } from "../actions/discover_actions";
import { merge } from "lodash";



export const AdminReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case ADMIN:
      return merge({}, action.admin);
    default:
      return state
  }
};
