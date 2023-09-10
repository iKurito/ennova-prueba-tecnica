import { useDispatch } from "react-redux";
import { useAsync, useFetchAndLoad } from "../../hooks";
import { retrieveMoviesNowPlaying } from "../../services";
import { moviesDbApi } from "../../api";
import { setNowPlaying } from "../../redux/states/movieDb";

function Home() {
	const dispatch = useDispatch();

	const { loading, callEndpoint } = useFetchAndLoad();

	const getMoviesNowPlaying = () => callEndpoint(retrieveMoviesNowPlaying(moviesDbApi));

	const setMoviesNowPlaying = (data: unknown) => {
		dispatch(setNowPlaying(data));
	};

	useAsync(getMoviesNowPlaying, setMoviesNowPlaying, () => {}, []);

	return (
		<div>
			<h1>Home</h1>
			{loading ? <h2>Loading...</h2> : <h2>Loaded!</h2>}
		</div>
	);
}

export default Home;
