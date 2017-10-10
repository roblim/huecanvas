import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostForm from './post_form';


import { fetchPost, createPost, updatePost } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  let currentUser = state.session.currentUser;
  let post = { title: "", body: "" };
  let formType = "new";
  if (ownProps.match.path == "/posts/:postId/edit") {
    post = state.posts[ownProps.match.params.postId];
    formType = "edit";
  }
  return { post, currentUser };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchPost: id => dispatch(fetchPost(id)),
    createPost: (post) => dispatch(createPost(post)),
    updatePost: (post) => dispatch(updatePost(post))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm));
