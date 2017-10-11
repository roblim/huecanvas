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
  ).then(data => console.log(data[0].success));
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

export const setBrightness = (user, lightId, brightness) => {
  user.setLightState(
    lightId,
    {
      bri: brightness
    }
  ).then(data => console.log(data));
};

export const incBrightness = (user, lightId, inc) => {
  user.setLightState(
    lightId,
    {
      bri_inc: inc
    }
  ).then(data => console.log(data));
};

export const decBrightness = (user, lightId, dec) => {
  user.setLightState(
    lightId,
    {
      bri_inc: (-1 * dec)
    }
  ).then(data => console.log(data));
};

export const setAllLightsOff = (user) => {
  user.setGroupState(
    0,
    {
      on: false
    }
  ).then(data => console.log(data));

  // let lights = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
  // lights.forEach(light => setLightOff(user, light));
};

export const setAllLightsOn = (user) => {
  user.setGroupState(
    0,
    {
      on: true
    }
  ).then(data => console.log(data));

  // let lights = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
  // lights.forEach(light => setLightOn(user, light));
};


export const rgbToXY = (rgbObject) => {
  let red = rgbObject.red / 255.0;
  let green = rgbObject.green / 255.0;
  let blue = rgbObject.blue / 255.0;

  red = (red > 0.04045) ? Math.pow((red + 0.055) / (1.0 + 0.055), 2.4) : (red / 12.92);
  green = (green > 0.04045) ? Math.pow((green + 0.055) / (1.0 + 0.055), 2.4) : (green / 12.92);
  blue = (blue > 0.04045) ? Math.pow((blue + 0.055) / (1.0 + 0.055), 2.4) : (blue / 12.92);

  let X = red * 0.664511 + green * 0.154324 + blue * 0.162028;
  let Y = red * 0.283881 + green * 0.668433 + blue * 0.047685;
  let Z = red * 0.000088 + green * 0.072310 + blue * 0.986039;

  let x = (X / (X + Y + Z));
  let y = (Y / (X + Y + Z));
  let bri = Y;

  return { x, y, bri };
};

export const setLightColor = (user, lightId, rgbObject) => {
  let xY = rgbToXY(rgbObject);
  user.setLightState(
    lightId,
    {
      bri: Math.round(xY.bri * 255),
      xy: [xY.x, xY.y]
    }
  ).then(data => console.log(data));
};
