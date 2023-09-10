import { NowPlayingInfo } from "./now-playing-info.model";
import { PopularInfo } from "./popular-info.model";
import { TopRatedInfo } from "./top-rated-info.model";

export interface MovieDbInfo {
  nowPlaying: NowPlayingInfo;
  topRated: TopRatedInfo;
  popular: PopularInfo;
}
