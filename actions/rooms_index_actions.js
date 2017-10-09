import {api} from './util/rooms_index_api_util';
export const RECEIVE_LIGHTS = "RECEIVE_LIGHTS";

const receiveLights = lights =>{
  return({
    type: RECEIVE_LIGHTS,
    lights
  });
};

export const fetchLights = () => dispatch =>(
  api.lights().then(lights => dispatch(receiveLights(lights)))
);
