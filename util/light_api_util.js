import jsHue from 'jshue';

const appAcademyHue = "VJw19b5u6kZ2kWx8C5AqnaYe2eDS-kI2y8RHlL2o";
const homeHue = '54gEGoS1LxdOnFSk3fWMfMa7sQYUi76ERzWRGhZs';
const appAcademyIP = '192.168.1.234';
const homeIP = '10.1.10.67'
const Hue = jsHue();
const Bridge = Hue.bridge(homeIP);
const User = Bridge.user(homeHue);

const state = {
  entities: {
    lights: User.getLights().then(r => console.log(r))
  },
  admin: {
    bridge: Bridge,
    user: User,
    bridgeIP: homeIP
  }
};

export const blinkLight = (user, lightId) => {
  user.setLightState(
    lightId,
    { alert: 'select'}
  ).then(data => console.log(data));
};

export const setLightOff = (user, lightId) => {
  user.setLightState(
    lightId,
    {
      on: false
    }
  ).then(data => console.log(data));
};

export const setLightOn = (user, lightId) => {
  user.setLightState(
    lightId,
    {
      on: true
    }
  ).then(data => console.log(data));
};
