import { Movie } from "./movie.model";

export interface NowPlayingInfo {
  page:          number;
  results:       Movie[];
  total_pages:   number;
  total_results: number;
}

export interface Dates {
  maximum: string;
  minimum: string;
}