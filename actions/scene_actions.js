import * as APIUtil from "../util/admin_api_util";

export const RECEIVE_ALL_SCENES = "RECEIVE_ALL_SCENES";
export const RECEIVE_SCENE = "RECEIVE_SCENE";
export const REMOVE_SCENE = "REMOVE_SCENE";

export const fetchScenes = () => dispatch => (
  APIUtil.User.getScenes().then((scenes) => dispatch(receiveAllScenes(scenes)))
);

export const fetchScene = (id) => dispatch => (
  APIUtil.User.getScene(id).then(scene => dispatch(receiveScene(scene)))
);

export const deleteScene = (id) => dispatch => (
  APIUtil.User.deleteScene(id).then((scene) => dispatch(removeScene(scene)))
);

export const createScene = (scene) => dispatch => (
  APIUtil.User.createScene(scene).then((scene) => dispatch(createScene(scene)))
);

const receiveAllScenes = (scenes) => ({
  type: RECEIVE_ALL_SCENES,
  scenes
})

const receiveScene = (scene) => ({
  type: RECEIVE_SCENE,
  scene
})

const removeScene = (scene) => ({
  type: REMOVE_SCENE,
  scene
})
