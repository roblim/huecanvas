import { connect } from "react-redux";
import SceneIndex from "./scene_index";
import { fetchScenes, fetchScene, deleteScene, createScene } from "../../actions/scene_actions";

const mapStateToProps = (state) => {
  console.log(state);
  let user = state.user;
  if (state.entities.scenes) {
    return {
      scenes: Object.keys(state.entities.scenes).map((id) => state.entities.scenes[id])
    }
  } else {
    return {
      "no": "scenes"
    }
  }


}

const mapDispatchToProps = (dispatch) => ({
  fetchScenes: () => dispatch(fetchScenes()),
  fetchScene: (scene) => dispatch(fetchScene(scene)),
  deleteScene: (id) => dispatch(deleteScene(id)),
  createScene: (scene) => dispatch(createScene(scene))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SceneIndex);
