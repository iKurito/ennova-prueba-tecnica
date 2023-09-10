import { useSelector } from "react-redux";
import { MoviesDBStore } from "../../../redux/store";
import { ContainerCard } from "../../../components/ContainerCard";
import { Card } from "../../../components/Card";

function NowPlaying() {
	const movieDbState = useSelector((store: MoviesDBStore) => store.movieDb);
	const { nowPlaying } = movieDbState;
	const results = nowPlaying.results ?? [];

	return (
		<ContainerCard title="Now Playing">
			{results.map((movie) => (
				<Card key={movie.id} title={movie.title} overview={movie.overview} />
			))}
		</ContainerCard>
	);
}

export default NowPlaying;
