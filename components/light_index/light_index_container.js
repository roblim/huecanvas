import { connect } from 'react-redux';
import { selectRoomLights,
         selectLights,
         selectLightPositions } from '../../reducers/selectors';
import LightIndex from './light_index';
import { fetchLights } from '../../actions/discover_actions';

const mapStateToProps = (state, ownProps) => ({
  room: state.entities.rooms[ownProps.room],
  user: state.admin.user,
  lights: selectRoomLights(state, ownProps.room),
  lightPositions: selectLightPositions(state, ownProps.room)
});

const mapDispatchToProps = (dispatch) => ({
  fetchLights: () => dispatch(fetchLights())
});

const LightIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LightIndex);

export default LightIndexContainer;

// {id: 0,
//  name: "Daddy’s",
//  lights: {
// 					1: {lightId: 1, canvasPosition: null},
// 					2: {lightId: 2, canvasPosition: null},
// 	 			 }
// }
