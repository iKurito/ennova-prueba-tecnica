interface Props {
	title: string;
	children: JSX.Element | JSX.Element[];
}

function ContainerCard({ title, children }: Props) {
	return (
		<div className="space-y-4">
			<h2 className="text-2xl">{title}</h2>
			<div className="grid grid-cols-5 gap-10">{children}</div>
		</div>
	);
}

export default ContainerCard;
