/* eslint-disable */
import { useDispatch } from "react-redux";
import { useMultiAsync, useMultiFetchAndLoad } from "../../hooks";
import { retrieveMovies } from "../../services";
import { moviesDbApi } from "../../api";
import { setNowPlaying, setPopular, setTopRated } from "../../redux/states/movieDb";
import NowPlaying from "./components/NowPlaying";
import TopRated from "./components/TopRated";
import Popular from "./components/Popular";

function Home() {
	const dispatch = useDispatch();

	const { loading, callMultiEndpoint } = useMultiFetchAndLoad();

	const getMovies = () => callMultiEndpoint(retrieveMovies(moviesDbApi));

	const setMovies = (data: any) => {
		dispatch(setNowPlaying(data[0]));
		dispatch(setPopular(data[1]));
		dispatch(setTopRated(data[2]));
	};

	useMultiAsync(getMovies, setMovies, () => {}, []);

	return (
		<div>
			{loading ? (
				<h2>Loading...</h2>
			) : (
				<div className="space-y-4">
					<NowPlaying />
					<Popular />
					<TopRated />
				</div>
			)}
		</div>
	);
}

export default Home;
