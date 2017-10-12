import { connect } from "react-redux";
import Discover from "./discover";
import { fetchBridges, fetchLights, getUser } from "../../actions/discover_actions";

const mapStateToProps = (state) => {
  if (state.bridges) {
    return {
      bridges: Object.keys(state.bridges).map((id) => state.bridges[id]),
      lights: Object.keys(state.lights).map((id) => state.lights[id])
    }
  } else {
    return {
      bridges: []
    }
  }

}


const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser()),
  fetchBridges: () => dispatch(fetchBridges()),
  fetchLights: () => dispatch(fetchLights())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
