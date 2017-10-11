import jsHue from 'jshue';

const Hue = jsHue();
const Bridge = Hue.bridge('192.168.1.234');
const User = Bridge.user("VJw19b5u6kZ2kWx8C5AqnaYe2eDS-kI2y8RHlL2o");

const state = {
  entities: {
    lights: User.getLights().then(r => console.log(r))
  },
  admin: {
    bridge: Bridge,
    user: User,
    bridgeIP: '192.168.1.234'
  }
};

export const blinkLight = (state, lightId) => {
  state.admin.user.setLightState(
    lightId,
    { alert: 'select'}
  ).then(data => console.log(data));
};
