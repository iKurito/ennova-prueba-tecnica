import { createSlice } from "@reduxjs/toolkit";
import { MovieDbInfo, NowPlayingInfo, PopularInfo, TopRatedInfo } from "../../models";

export const EmptyMovieDbState: MovieDbInfo = {
  nowPlaying: {} as NowPlayingInfo,
  topRated: {} as TopRatedInfo,
  popular: {} as PopularInfo
}

export const movieDbSlice = createSlice({
  name: 'movieDb',
  initialState: EmptyMovieDbState,
  reducers: {
    setNowPlaying: (state, action) => {
      return { ...state, nowPlaying: action.payload }
    },    
    setPopular: (state, action) => {
      return { ...state, popular: action.payload }
    },
    setTopRated: (state, action) => {
      return { ...state, topRated: action.payload }
    },
    clearNowPlaying: (state) => {
      return { ...state, nowPlaying: {} as NowPlayingInfo }
    },
    clearTopRated: (state) => {
      return { ...state, topRated: {} as TopRatedInfo }
    },
    clearPopular: (state) => {
      return { ...state, popular: {} as PopularInfo }
    },
    clearMovieDb: () => {
      return EmptyMovieDbState;
    }
  },
});

export const {
  setNowPlaying,
  setPopular,
  setTopRated,
  clearNowPlaying,
  clearTopRated,
  clearPopular,
  clearMovieDb
} = movieDbSlice.actions;

export default movieDbSlice.reducer;