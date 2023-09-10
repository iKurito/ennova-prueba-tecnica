import { useSelector } from "react-redux";
import { MoviesDBStore } from "../../../redux/store";
import { ContainerCard } from "../../../components/ContainerCard";
import { Card } from "../../../components/Card";

function Popular() {
	const movieDbState = useSelector((store: MoviesDBStore) => store.movieDb);
	const { popular } = movieDbState;
	const results = popular.results ?? [];

	return (
		<ContainerCard title="Popular">
			{results.map((movie) => (
				<Card key={movie.id} title={movie.title} overview={movie.overview} />
			))}
		</ContainerCard>
	);
}

export default Popular;
