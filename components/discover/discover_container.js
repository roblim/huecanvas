import { connect } from "react-redux";
import Discover from "./discover";
import { fetchBridges, fetchLights, createUser } from "../../actions/discover_actions";

const mapStateToProps = (state) => {
  console.log(state);
  if (state.admin.error) {
    let error = true;
  } else {
    error = false;
  }
  let bridge = state.admin.bridge;

  if (state.admin.bridge) {
    return {
      bridge,
      error
      // lights: Object.keys(state.entities.lights).map((id) => state.entitieslights[id])
    }
  } else {
    return {
      bridges: []
    }
  }

}


const mapDispatchToProps = (dispatch) => ({
  createUser: (bridge) => dispatch(createUser(bridge)),
  fetchBridges: () => dispatch(fetchBridges()),
  fetchLights: () => dispatch(fetchLights())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
