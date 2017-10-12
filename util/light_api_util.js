import jsHue from 'jshue';

const appAcademyHue = "VJw19b5u6kZ2kWx8C5AqnaYe2eDS-kI2y8RHlL2o";
const homeHue = '54gEGoS1LxdOnFSk3fWMfMa7sQYUi76ERzWRGhZs';
const appAcademyIP = '192.168.1.234';
const homeIP = '10.1.10.67'
const Hue = jsHue();
const Bridge = Hue.bridge(homeIP);
const User = Bridge.user(homeHue);

export const blinkLight = (user, lightId) => {
  user.setLightState(
    lightId,
    { alert: 'select'}
  ).then(data => console.log(Object.values(data[0].success)[0]));
};

export const setLightOff = (user, lightId) => {
  return user.setLightState(
    lightId,
    {
      on: false
    }
  );
};

export const setLightOn = (user, lightId) => {
  user.setLightState(
    lightId,
    {
      on: true
    }
  ).then(data => console.log(Object.values(data[0].success)[0]));
};

export const setBri = (user, lightId, brightness) => {
  user.setLightState(
    lightId,
    {
      bri: brightness
    }
  ).then(data => console.log(Object.values(data[0].success)[0]));
};

export const incBri = (user, lightId, inc) => {
  user.getLight(8).then(data => console.log(data));
  user.setLightState(
    lightId,
    {
      bri_inc: inc
    }
  ).then(data => console.log(Object.values(data[0].success)[0]));
  user.getLight(8).then(data => console.log(data));
};

export const decBri = (user, lightId, dec) => {
  user.setLightState(
    lightId,
    {
      bri_inc: (-1 * dec)
    }
  ).then(data => console.log(Object.values(data[0].success)[0]));
};

export const setAllLightsOff = (user) => {
  user.setGroupState(
    0,
    {
      on: false
    }
  ).then(data => console.log(Object.values(data[0].success)[0]));

  // let lights = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
  // lights.forEach(light => setLightOff(user, light));
};

export const setAllLightsOn = (user) => {
  user.setGroupState(
    0,
    {
      on: true
    }
  ).then(data => console.log(Object.values(data[0].success)[0]));

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
  ).then(data => console.log({ xy: Object.assign({}, data[0].success, data[1].success)['/lights/8/state/xy'],
                               bri: Object.assign({}, data[0].success, data[1].success)['/lights/8/state/bri']
                             }));
};

export const setMiredTemperature = (user, lightId, temp) => {
  user.setLightState(
    lightId,
    {
      ct: temp,
    }
  ).then(data => console.log(Object.values(data[0].success)[0]));
};
