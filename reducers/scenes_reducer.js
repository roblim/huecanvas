import { RECEIVE_ALL_SCENES, RECEIVE_SCENE, REMOVE_SCENE } from "../actions/scene_actions";
import { merge } from "lodash";


const ScenesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_SCENES:
      return merge({}, action.scenes);
    case RECEIVE_SCENE:
      return merge({}, oldState, {[action.scene.id]: action.scene});
    case REMOVE_SCENE:
      let newState = merge({}, oldState);
      delete newState[action.scene.id];
      return newState;
    default:
      return oldState;
  }
};

export default ScenesReducer;
