import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const fetchPosts = () => dispatch => (
  PostApiUtil.fetchPosts().then(posts => dispatch(receiveAllPosts(posts)))
);

export const fetchPost = id => dispatch => (
  PostApiUtil.fetchPost(id).then(post => dispatch(receivePost(post)))
);

export const createPost = post => dispatch => (
  PostApiUtil.createPost(post).then(post => dispatch(receivePost(post)))
);

export const updatePost = post => dispatch => (
  PostApiUtil.updatePost(post)
             .then(post => dispatch(receivePost(post)))
);

export const deletePost = post => dispatch => (
  PostApiUtil.deletePost(post).then(post => dispatch(removePost(post)))
);

export const likePost = (id) => dispatch => (
  PostApiUtil.likePost(id).then((post) => dispatch(receivePost(post)))
)

export const unlikePost = (id) => dispatch => (
  PostApiUtil.unlikePost(id).then((post) => dispatch(receivePost(post)))
)

const receiveLike = post => ({
  type: RECEIVE_LIKE,
  post
})

const removeLike = post => ({
  type: REMOVE_LIKE,
  post
})

const receiveAllPosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

const removePost = post => ({
  type: REMOVE_POST,
  post
});
