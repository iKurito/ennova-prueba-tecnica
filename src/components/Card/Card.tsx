interface Props {
	title: string;
	overview: string;
}

function Card({ title, overview }: Props) {
	return (
		<div className="bg-white p-4 border rounded-lg shadow-lg">
			<h3>{title}</h3>
			<p>{overview}</p>
		</div>
	);
}

export default Card;
