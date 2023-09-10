import { TabTitle } from "../utilities";

interface Props {
	children: JSX.Element[] | JSX.Element;
	title: string;
}

function AuthLayout({ children, title }: Props) {
	TabTitle(title);

	return (
		<main className="flex items-center min-h-screen p-4 bg-gray-100 sm:justify-center">
			{children}
		</main>
	);
}

export default AuthLayout;
