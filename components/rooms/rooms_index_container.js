import RoomsIndex from './rooms_index';
import { connect } from 'react-redux';
import { fetchRooms, createRoom, fetchRoom } from '../../actions/room_actions';
import { fetchLights } from '../../actions/discover_actions';

const mapStateToProps = state =>({
  rooms: state.entities.rooms,
  lights: state.entities.lights
});

const mapDispatchToProps = dispatch =>({
  fetchRooms: () => dispatch(fetchRooms()),
  createRoom: ()=> dispatch(createRoom()),
  fetchRoom: (id)=> dispatch(fetchRoom()),
  fetchLights: ()=> dispatch(fetchLights())
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomsIndex);
