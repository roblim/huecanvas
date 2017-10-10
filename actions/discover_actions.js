import jsHue from "jshue";

export const RECEIVE_ALL_BRIDGES = "RECEIVE_ALL_BRIDGES";

export const fetchBridges = () => dispatch => {
  jsHue.discover().then((bridges) => dispatch(receiveAllBridges(bridges)))
}

const receiveAllBridges = (bridges) => ({
  type: RECEIVE_ALL_BRIDGES,
  bridges
})
