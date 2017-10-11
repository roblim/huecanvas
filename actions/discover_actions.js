import jsHue from "jshue";

export const RECEIVE_ALL_BRIDGES = "RECEIVE_ALL_BRIDGES";

let hue = jsHue();

export const fetchBridges = () => dispatch => {
  hue.discover().then((bridges) => dispatch(receiveAllBridges(bridges)))
}

const receiveAllBridges = (bridges) => ({
  type: RECEIVE_ALL_BRIDGES,
  bridges
})
