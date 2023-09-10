import { useDispatch, useSelector } from "react-redux";
import { useAsync, useFetchAndLoad } from "../../hooks";
import { retrieveMoviesNowPlaying } from "../../services";
import { moviesDbApi } from "../../api";
import { setNowPlaying } from "../../redux/states/movieDb";
import { MoviesDBStore } from "../../redux/store";

function Home() {
	const dispatch = useDispatch();

	const movieDbState = useSelector((store: MoviesDBStore) => store.movieDb);
	const { nowPlaying } = movieDbState;

	const { loading, callEndpoint } = useFetchAndLoad();

	const getMoviesNowPlaying = () => callEndpoint(retrieveMoviesNowPlaying(moviesDbApi));

	const setMoviesNowPlaying = (data: unknown) => {
		dispatch(setNowPlaying(data));
	};

	useAsync(getMoviesNowPlaying, setMoviesNowPlaying, () => {}, []);

	return (
		<div>
			{loading ? <h2>Loading...</h2> : <h2>Loaded!</h2>}
			<pre>
				<code>
					{JSON.stringify(
						{
							nowPlaying,
						},
						null,
						2
					)}
				</code>
			</pre>
		</div>
	);
}

export default Home;
