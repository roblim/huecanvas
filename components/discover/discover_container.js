import { connect } from "react-redux";
import Discover from "./discover";
import { fetchBridges } from "../../actions/discover_actions";

const mapStateToProps = (state) => {
  if (state.bridges) {
    return {
      bridges: Object.keys(state.bridges).map((id) => state.bridges[id])
    }
  } else {
    return {
      bridges: []
    }
  }

}

const mapDispatchToProps = (dispatch) => ({
  fetchBridges: () => dispatch(fetchBridges())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
