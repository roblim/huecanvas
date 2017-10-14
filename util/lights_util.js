import jsHue from 'jshue';

const appAcademyHue = "VJw19b5u6kZ2kWx8C5AqnaYe2eDS-kI2y8RHlL2o";
const homeHue = '54gEGoS1LxdOnFSk3fWMfMa7sQYUi76ERzWRGhZs';
const appAcademyIP = '192.168.1.234';
const homeIP = '""'
const Hue = jsHue();
const Bridge = Hue.bridge(homeIP);
const User = Bridge.user(homeHue);

export const blinkLight = (user, lightId) => {
  return user.setLightState(
    lightId,
    { alert: 'select'}
  )
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
  return user.setLightState(
    lightId,
    {
      on: true
    }
  )
};

export const setBri = (user, lightId, brightness) => {
  return user.setLightState(
    lightId,
    {
      bri: brightness
    }
  )
};

export const incBri = (user, lightId, inc) => {
  return user.setLightState(
    lightId,
    {
      bri_inc: inc
    }
  )
};

export const decBri = (user, lightId, dec) => {
  return user.setLightState(
    lightId,
    {
      bri_inc: (-1 * dec)
    }
  )
};

export const setAllLightsOff = (user) => {
   return user.setGroupState(
    0,
    {
      on: false
    }
  )
};

export const setAllLightsOn = (user) => {
  return user.setGroupState(
    0,
    {
      on: true
    }
  )
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
  return user.setLightState(
    lightId,
    {
      bri: Math.round(xY.bri * 255),
      xy: [xY.x, xY.y]
    }
  )
};

// 153 (6500K) to 500 (2000K)
export const setMiredTemperature = (user, lightId, temp) => {
  return user.setLightState(
    lightId,
    {
      ct: temp,
    }
  )
};

export const fetchLights = () => {
  return user.getLights()
}
