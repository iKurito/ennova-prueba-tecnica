import { AxiosInstance } from 'axios';
import { loadAbort } from '../utilities';
import { getEnvVariables } from "../utilities";

const { VITE_MOVIES_DB_TOKEN } = getEnvVariables();

export const retrieveMoviesNowPlaying = (api: AxiosInstance) => {
  const controller = loadAbort();
  return {
    call: api.get('/now_playing', {
      signal: controller.signal,
      headers: {
        'Authorization': `Bearer ${VITE_MOVIES_DB_TOKEN}`
      }
    }),
    controller,
  }
}

export const retrieveMoviesPopular = (api: AxiosInstance) => {
  const controller = loadAbort();
  return {
    call: api.get('/popular', {
      signal: controller.signal,
      headers: {
        'Authorization': `Bearer ${VITE_MOVIES_DB_TOKEN}`
      }
    }),
    controller,
  }
}

export const retrieveMoviesTopRated = (api: AxiosInstance) => {
  const controller = loadAbort();
  return {
    call: api.get('/top_rated', {
      signal: controller.signal,
      headers: {
        'Authorization': `Bearer ${VITE_MOVIES_DB_TOKEN}`
      }
    }),
    controller,
  }
}


export const retrieveMovies = (api: AxiosInstance) => {
  const controller = loadAbort();
  return {
    calls: [
      api.get('/now_playing', {
        signal: controller.signal,        
      }),
      api.get('/popular', {
        signal: controller.signal,
      }),
      api.get('/top_rated', {
        signal: controller.signal,
      }),
    ],
    controller,
  }
}