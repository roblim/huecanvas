import {connect} from 'react-redux';
import {
	createRoom,
	updateRoom,
	fetchRooms
} from '../../actions/room_actions';
import RoomForm from './room_form';
// import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
	let room = { name: "" }
	let rooms = ownProps.rooms || state.rooms
	if (ownProps.room) {
		room = ownProps.room
	}
	return {room, rooms: rooms, modal2Visible: ownProps.modal2Visible, that: ownProps.that}
};

const mapDispatchToProps = (dispatch, ownProps) => {

	let formType = ownProps.room ? 'edit' : 'new'
	const processForm = (formType === 'new') ? createRoom : updateRoom;
	return {
		processForm: room => dispatch(processForm(room)),
		fetchRooms: () => dispatch(fetchRooms()),
		formType
	}
};

export default (connect(
	mapStateToProps,
	mapDispatchToProps
)(RoomForm));
