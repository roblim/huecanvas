import { connect } from 'react-redux';
import PostIndex from "./post_index";
import { fetchPosts, deletePost, createPost, likePost, unlikePost } from "../../actions/post_actions";

const mapStateToProps = (state) => {

    return {
    posts: Object.keys(state.posts).map((id) => state.posts[id]),
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: (post) => dispatch(deletePost(post)),
  updatePost: (post) => dispatch(updatePost(post)),
  createPost: (post) => dispatch(createPost(post)),
  likePost: (post_id) => dispatch(likePost(post_id)),
  unlikePost: (post_id) => dispatch(unlikePost(post_id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
