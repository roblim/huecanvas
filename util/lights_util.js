import jsHue from 'jshue';
import { rgbToCIE1931, getRGBFromXYAndBrightness } from './color';

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
  ).then(data => console.log(data), err => console.log(err));
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

export const setBriAll = (user, brightness) => {
  // console.log("deep user", user);
  return user.setGroupState(
    0,
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

export const xyToRGB = (xyArr, bri) => {
  let x = xyArr[0];
  let y = xyArr[1];
  let z = (1 - x - y) * 1.0;

  let Y = bri / 255.0;
  let X = (Y / y) * x;
  let Z = (Y / y) * z;

  let r =  (X * 1.656492) - (Y * 0.354851) - (Z * 0.255038);
  let g = (-X * 0.707196) + (Y * 1.655397) + (Z * 0.036152);
  let b =  (X * 0.051713) - (Y * 0.121364) + (Z * 1.011530);

  if (r > b && r > g && r > 1.0) {
      // red is too big
      g = g / r;
      b = b / r;
      r = 1.0;
  }
  else if (g > b && g > r && g > 1.0) {
      // green is too big
      r = r / g;
      b = b / g;
      g = 1.0;
  }
  else if (b > r && b > g && b > 1.0) {
      // blue is too big
      r = r / b;
      g = g / b;
      b = 1.0;
  }

  r = (r <= 0.0031308) ? 12.92 * r : (1.0 + 0.055) * Math.pow(r, (1.0 / 2.4)) - 0.055;
  g = (g <= 0.0031308) ? 12.92 * g : (1.0 + 0.055) * Math.pow(g, (1.0 / 2.4)) - 0.055;
  b = (b <= 0.0031308) ? 12.92 * b : (1.0 + 0.055) * Math.pow(b, (1.0 / 2.4)) - 0.055;

  if (r > b && r > g) {
    // red is biggest
    if (r > 1.0) {
        g = g / r;
        b = b / r;
        r = 1.0;
    }
}
else if (g > b && g > r) {
    // green is biggest
    if (g > 1.0) {
        r = r / g;
        b = b / g;
        g = 1.0;
    }
}
else if (b > r && b > g) {
    // blue is biggest
    if (b > 1.0) {
        r = r / b;
        g = g / b;
        b = 1.0;
    }
}

  return { red: r * 255, green: g * 255, blue: b * 255 }
};

export const setLightColor = (user, light, rgbObject) => {
  let xY = rgbToCIE1931(rgbObject.red / 255.0, rgbObject.green / 255.0, rgbObject.blue / 255.0, light.modelid);
  return user.setLightState(
    light.lightId,
    {
      bri: 255,
      xy: [xY[0], xY[1]],
      // bri: Math.round(xY[2] * 255),
      // transitiontime: 0
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

export const putLightName = (user, lightId, name) => {
  return user.setLight(lightId, { name });
};
