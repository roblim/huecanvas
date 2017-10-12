import {connect} from 'react-redux';
import {
	createRoom,
	updateRoom,
	fetchRoom
} from '../../actions/room_actions';
import RoomForm from './room_form';
// import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
	// let room = { name: "" }
	// let shouldRender = false;
	// if (ownProps.navigation.state.params === "/rooms/new") {
	// 	shouldRender = true;
	// } else if (ownProps.match.path === "/rooms/:roomId/edit") {
	// 		room = state.entities.rooms[ownProps.match.params.roomId];
	// 		if (ownProps.renderId == ownProps.match.params.roomId) {
	// 			shouldRender = true;
	// 		}
	// 	}
	// return {room, shouldRender}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	// const formType = ownProps.match.path == "/rooms/:roomId/edit" ?
	// 	 'edit' :
	// 	 'new';
	//
	// const processForm = (formType === 'new') ? createRoom : updateRoom;
	// return {
	// 	processForm: room => dispatch(processForm(room)),
	// 	fetchRoom: id => dispatch(fetchRoom(id)),
	// 	formType
	// }
};

export default (connect(
	//mapStateToProps,
	//mapDispatchToProps
)(RoomForm));
