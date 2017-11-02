import { connect } from 'react-redux';
import { selectRoomLights,
         selectLights,
         selectLightPositions,
         selectRoom } from '../../reducers/selectors';
import LightIndex from './light_index';
import { fetchLights } from '../../actions/discover_actions';

const mapStateToProps = (state, ownProps) => ({
  room: selectRoom(state, ownProps.room),
  user: state.admin.user,
  lights: selectRoomLights(state, ownProps.room),
  lightPositions: selectLightPositions(state, ownProps.room)
});

const mapDispatchToProps = (dispatch) => ({
  fetchLights: (user) => dispatch(fetchLights(user))
});

const LightIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LightIndex);

export default LightIndexContainer;
