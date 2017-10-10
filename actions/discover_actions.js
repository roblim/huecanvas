import * as APIUtil from "jshue";

export const RECEIVE_ALL_BRIDGES = "RECEIVE_ALL_BRIDGES";

export const fetchBridges = () => dispatch => {
  APIUtil.discover.then((bridges) => dispatch(receiveAllBridges(bridges)))
}

const receiveAllBridges = (bridges) => ({
  type: RECEIVE_ALL_BRIDGES,
  bridges
})
