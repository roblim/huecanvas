import { fetchUser, followUser, unfollowUser } from "../../actions/users_actions";
import { likePost, unlikePost, updatePost, deletePost } from "../../actions/post_actions";
import { connect } from "react-redux";
import UserShow from "./user_show";

const mapStateToProps = (state, ownProps) => {
  let user;
  if (!state.users[ownProps.match.params.userId]) {
    user = {
      id: "",
      username: "",
      posts: [],
      followers: []
    }
  } else {
    user = state.users[ownProps.match.params.userId];
  }

  return {
    user,
    currentUser: state.session.currentUser,
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    followUser: (followee_id) => dispatch(followUser(followee_id)),
    unfollowUser: (followee_id) => dispatch(unfollowUser(followee_id)),
    likePost: (post_id) => dispatch(likePost(post_id)),
    unlikePost: (post_id) => dispatch(unlikePost(post_id)),
    deletePost: (post_id) => dispatch(deletePost(post_id)),
    updatePost: (post_id) => dispatch(updatePost(post_id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
