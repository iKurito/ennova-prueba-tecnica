import { configureStore } from "@reduxjs/toolkit";
import { MovieDbInfo } from "../models";
import { movieDbSliceReducer } from "./states";

export interface MoviesDBStore {
  movieDb: MovieDbInfo;
}

export default configureStore<MoviesDBStore>({
  reducer: {
    movieDb: movieDbSliceReducer,
  },
  devTools: !import.meta.env.PROD,
});
