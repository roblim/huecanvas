import { RECEIVE_USER,
        RECEIVE_USERS,
        RECEIVE_LIKE,
        REMOVE_LIKE,
        RECEIVE_FOLLOW,
        REMOVE_FOLLOW } from "../actions/users_actions";
import merge from "lodash/merge";

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      let newState = merge({}, oldState, {[action.user.id]: action.user})
      newState[action.user.id].followers = action.user.followers;
      return newState;
    case RECEIVE_USERS:
      return merge({}, action.users);
    case RECEIVE_LIKE:
      return merge({}, oldState, action);
    case REMOVE_LIKE:
      return merge({}, oldState, action);
    case REMOVE_FOLLOW:
      let dookie = merge({}, oldState);
      delete dookie[action.user.id].followers[oldState.session.currentUser.id]
      return dookie
    case REMOVE_FOLLOW:
      let thisState =  merge({}, oldState, action);
      return thisState;
    default:
    return oldState;
  }
};

export default UsersReducer;
