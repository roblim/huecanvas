import RoomsIndex from './rooms_index';
import { connect } from 'react-redux';
import { fetchRooms, createRoom, fetchRoom, deleteRoom, updateRoom } from '../../actions/room_actions';
import { fetchLights } from '../../actions/discover_actions';
import { selectUnassignedLights } from '../../reducers/selectors.js';

const mapStateToProps = state =>({
  rooms: state.entities.rooms,
  lights: selectUnassignedLights(state)
});

const mapDispatchToProps = dispatch =>({
  fetchRooms: () => dispatch(fetchRooms()),
  createRoom: ()=> dispatch(createRoom()),
  fetchRoom: (id)=> dispatch(fetchRoom(id)),
  fetchLights: ()=> dispatch(fetchLights()),
  deleteRoom: (id)=>dispatch(deleteRoom(id)),
  updateRoom: (room)=>dispatch(updateRoom(room))
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomsIndex);
