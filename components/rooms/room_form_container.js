import {connect} from 'react-redux';
import {
	createRoom,
	updateRoom,
	fetchRoom
} from '../../actions/room_actions';
import RoomForm from './room_form';
// import { withRouter } from 'react-router-dom';

const assignId = (room, entities) => {
	
	if (Object.keys(entities.rooms).length !== 0) {
		let maxId= Object.keys(entities.rooms).reduce((a, b) => {
			console.log(a, b);
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
	console.log(state.entities);
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
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const formType = ownProps.navigation.state.params == "RoomEdit" ?
		 'edit' :
		 'new';

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
