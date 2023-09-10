import { AxiosResponse } from 'axios';

export interface AxiosCall<T> {
  call: Promise<AxiosResponse<T>>;
  controller?: AbortController;
}

export interface AxiosCalls<T> {
  calls: Promise<AxiosResponse<T>>[];
  controller?: AbortController;
}
