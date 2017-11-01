import {connect} from 'react-redux';
import {
	createRoom,
	updateRoom,
	fetchRoom,
	fetchRooms
} from '../../actions/room_actions';
import * as APIUtil from '../../util/rooms_api_util'
import RoomForm from './room_form';

const mapStateToProps = (state, ownProps) => {
	let room = {id: 0, coordinates: {x:0, y:0, height:128, width:205}}
	let rooms = ownProps.rooms || state.rooms
	if (ownProps.room) {
		room = ownProps.room
	}
	return {room, rooms: rooms, modal2Visible: ownProps.modal2Visible, that: ownProps.that}
};

const mapDispatchToProps = (dispatch, ownProps) => {

	let formType = !!ownProps.room ? 'edit' : 'new'
	console.log(formType);
	const processForm = (formType == 'new') ? createRoom : updateRoom;
	return {
		processForm: room => dispatch(processForm(room)),
		fetchRooms: () => dispatch(fetchRooms()),
		fetchRoom: () => dispatch(fetchRoom()),
		formType
	}
};

export default (connect(
	mapStateToProps,
	mapDispatchToProps
)(RoomForm));
