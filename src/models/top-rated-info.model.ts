import { Movie } from "./movie.model";

export interface TopRatedInfo {
  page:          number;
  results:       Movie[];
  total_pages:   number;
  total_results: number;
}