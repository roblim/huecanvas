import * as APIUtil from "../util/admin_api_util";

export const RECEIVE_ALL_SCENES = "RECEIVE_ALL_SCENES";
export const RECEIVE_SCENE = "RECEIVE_SCENE";
export const REMOVE_SCENE = "REMOVE_SCENE";

export const fetchScenes = () => dispatch => {
  APIUtil.User.getScenes().then((scenes) => dispatch(receiveAllScenes(scenes))).catch(function(error) {
    console.log('There has been a problem with your fetchScenes operation: ' + error.message);
  })
};

export const fetchScene = (id) => dispatch => (
  APIUtil.User.getScene(id).then(scene => dispatch(receiveScene(scene))).catch(function(error) {
    console.log('There has been a problem with your fetchScene operation: ' + error.message);
  })
);

export const setScene = (id) => dispatch => {
  APIUtil.User.setGroupState(0, {"scene": `${id}`}
).then(scene => dispatch(receiveScene(scene)))
}

export const updateScene = (id, scene) => dispatch => {
  APIUtil.User.deleteScene(id).then((data) => {
    if (data[0].success) {
      APIUtil.User.createScene(scene).then((scene) => dispatch(receiveScene(scene)))
    }
  })
}

export const createScene = (scene) => dispatch => (
  APIUtil.User.createScene(scene).then((scene) => dispatch(receiveScene(scene)))
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
