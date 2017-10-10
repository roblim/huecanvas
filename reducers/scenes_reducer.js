import { RECEIVE_ALL_SCENES, RECEIVE_SCENE, REMOVE_SCENE } from "../scene_actions";
import { merge } from "lodash";

const ScenesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_SCENES:
      return merge({}, action.posts);
    case RECEIVE_SCENE:
      return merge({}, oldState, {[action.post.id], action.post});
    case REMOVE_SCENE:
      let newState = merge({}, oldState);
      delete newState[action.post.id];
      return newState;
    default:
      return oldState;
  }
};

export default ScenesReducer;
