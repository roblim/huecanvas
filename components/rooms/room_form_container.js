import {connect} from 'react-redux';
import {
	createRoom,
	updateRoom,
	fetchRooms
} from '../../actions/room_actions';
import RoomForm from './room_form';
// import { withRouter } from 'react-router-dom';

<<<<<<< HEAD
const mapStateToProps = (state, ownProps) => {
	let room = { name: "" }
	let rooms = ownProps.rooms || state.rooms
	if (ownProps.room) {
		room = ownProps.room
	}
	return {room, rooms: rooms, modal2Visible: ownProps.modal2Visible, that: ownProps.that}
=======
const assignId = (room, entities) => {

	if (Object.keys(entities.rooms).length !== 0) {
		let maxId= Object.keys(entities.rooms).reduce((a, b) => {
			return (Math.max(a, b))
		})
		room["id"] = maxId + 1
		return room;
	} else {
		room["id"] = 0
	}
}

const mapStateToProps = (state, ownProps) => {
	let room = { name: "" }
	// room = assignId(room, state.entities)
	let shouldRender = false;
	if (ownProps.navigation.state.routeName === "RoomNew") {
		shouldRender = true;
	} else if (ownProps.navigation.state.params === "RoomEdit") {
			room = state.entities.rooms[ownProps.match.params.roomId];
			if (ownProps.renderId == ownProps.match.params.roomId) {
				shouldRender = true;
			}
		}
	return {room, shouldRender}
>>>>>>> scene
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
