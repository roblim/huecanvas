import { connect } from "react-redux";
import SceneIndex from "./scene_index";
import { fetchScenes, fetchScene, deleteScene, createScene } from "../../actions/scene_actions";

const mapStateToProps = (state) => {
  let user = state.user;
if (state.scenes) {
    return {
      scenes: Object.keys(state.scenes).map((id) => state.scenes[id])
    }
  } else {
    return {
      scenes: [
        {0: {
          id: 0,
          "name": "default",
          "lights": [],
          "owner": user
        }
      },
      {
        1: {
          id: 1,
         "name": "Kathy on 1449133269486",
         "lights": ["2", "3"],
         "owner": "ffffffffe0341b1b376a2389376a2389"
         }
       }
       ]
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
