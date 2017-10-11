import RoomIndex from './rooms_index';
import { connect } from 'react-redux';
import { fetchRooms } from '../../actions/room_actions';

const mapStateToProps = state =>({
  rooms: state.rooms
});

const mapDispatchToProps = dispatch =>({
  fetchRooms: () => dispatch(fetchRooms())
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomIndex);
