import { useSelector } from "react-redux";
import { MoviesDBStore } from "../../../redux/store";
import { Card } from "../../../components/Card";
import { ContainerCard } from "../../../components/ContainerCard";

function TopRated() {
	const movieDbState = useSelector((store: MoviesDBStore) => store.movieDb);
	const { topRated } = movieDbState;
	const results = topRated.results ?? [];

	return (
		<ContainerCard title="Top Rated">
			{results.map((movie) => (
				<Card key={movie.id} title={movie.title} overview={movie.overview} />
			))}
		</ContainerCard>
	);
}

export default TopRated;
