import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

export const fetchUser = (id) => dispatch => (
  UserApiUtil.fetchUser(id).then((user) => dispatch(receiveUser(user)))
);

export const fetchUsers = () => dispatch => (
  UserApiUtil.fetchUsers().then((users) => dispatch(receiveUsers(users)))
);

export const followUser = (followee_id) => dispatch => (
  UserApiUtil.followUser(followee_id).then((user) => dispatch(receiveUser(user)))

)
export const unfollowUser = (followee_id) => dispatch => (
  UserApiUtil.unfollowUser(followee_id).then((user) => dispatch(receiveUser(user)))
)

const receiveFollow = (user) => ({
  type: RECEIVE_FOLLOW,
  followers: user.followers,
  user
})

const removeFollow = (user) => ({
  type: REMOVE_FOLLOW,
  user
})

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
})

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
})
