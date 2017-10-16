import { connect } from 'react-redux';
import { selectLights } from '../../reducers/selectors';
import LightIndex from './light_index';
import { fetchLights } from '../../actions/discover_actions';

const mapStateToProps = (state, ownProps) => ({
  roomId: ownProps.room,
  user: state.admin.user,
  lights: selectLights(state)
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
