import {connect} from 'react-redux';
import {
	createRoom,
	updateRoom,
	fetchRoom
} from '../../actions/room_actions';
import RoomForm from './room_form';
// import { withRouter } from 'react-router-dom';

const assignId = (room, rooms) => {

	if (Object.keys(rooms).length !== 0) {
		let maxId= Object.keys(rooms).reduce((a, b) => {
			console.log(a, b);
			return (Math.max(a, b))
		})
		return room["id"] = maxId + 1
	} else {
		return room["id"] = 0
	}
}

const mapStateToProps = (state, ownProps) => {
	let room = { name: "" }
	if (ownProps.room) {
		room = ownProps.room
	} else {
		ownProps.rooms ? assignId(room, ownProps.rooms) : room["id"] = 0
	}
	return {room, modal2Visible: ownProps.modal2Visible, that: ownProps.that}
};

const mapDispatchToProps = (dispatch, ownProps) => {

	let formType = ownProps.room ? 'edit' : 'new'
	const processForm = (formType === 'new') ? createRoom : updateRoom;
	return {
		processForm: room => dispatch(processForm(room)),
		fetchRoom: id => dispatch(fetchRoom(id)),
		formType
	}
};

export default (connect(
	mapStateToProps,
	mapDispatchToProps
)(RoomForm));
