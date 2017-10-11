import * as ApiUtil from "jshue";

export const RECEIVE_ALL_SCENES = "RECEIVE_ALL_SCENES";
export const RECEIVE_SCENE = "RECEIVE_SCENE";
export const REMOVE_SCENE = "REMOVE_SCENE";

export const fetchScenes = () => dispatch => (
  ApiUtil.getScenes().then((scenes) => dispatch(receiveAllScenes(scenes)))
);

export const fetchScene = (id) => dispatch => (
<<<<<<< HEAD
  ApiUtil.getScene(id).then((scene) => dispatch(receiveScene(scene)))
=======
  ApiUtil.getScene(id).then(scene => dispatch(receiveScene(scene)))
>>>>>>> bridge-discovery
);

export const deleteScene = (id) => dispatch => (
  ApiUtil.deleteScene(id).then((scene) => dispatch(removeScene(scene)))
);

export const createScene = (scene) => dispatch => (
  ApiUtil.createScene(scene).then((scene) => dispatch(createScene(scene)))
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
