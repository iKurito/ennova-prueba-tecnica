import { createSlice } from "@reduxjs/toolkit";
import { MovieDbInfo, NowPlaying } from "../../models";

export const EmptyMovieDbState: MovieDbInfo = {
  nowPlaying: {} as NowPlaying,
}

export const movieDbSlice = createSlice({
  name: 'movieDb',
  initialState: EmptyMovieDbState,
  reducers: {
    setNowPlaying: (state, action) => {
      return { ...state, nowPlaying: action.payload }
    },
    clearNowPlaying: (state) => {
      return { ...state, nowPlaying: {} as NowPlaying }
    },
    clearMovieDb: () => {
      return EmptyMovieDbState;
    }
  },
});

export const { setNowPlaying, clearNowPlaying, clearMovieDb } = movieDbSlice.actions;

export default movieDbSlice.reducer;