import { AxiosInstance } from 'axios';
import { loadAbort } from '../utilities';

export const retrieveMoviesNowPlaying = (api: AxiosInstance) => {
  const controller = loadAbort();
  return {
    call: api.get('/now_playing', {
      signal: controller.signal,
    }),
    controller,
  }
}