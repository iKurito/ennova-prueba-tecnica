import { Link, useLocation } from "react-router-dom";
import { PrivateRoutes } from "../../models";

const navbars = [
	{
		name: "Inicio",
		path: PrivateRoutes.HOME,
	},
	{
		name: "Cuestionario",
		path: PrivateRoutes.CUSTOM_FORM,
	},
];

function Navbar() {
	const location = useLocation();
	const pathname = location.pathname;

	return (
		<nav className="sticky top-0 px-4 md:px-8 pt-4 bg-gray-100 z-50">
			<div className="flex justify-center px-4 py-3 border rounded-lg bg-white shadow-lg">
				<ul className="inline-flex items-center space-x-2 lg:space-x-4">
					{navbars.map((navbar, index) => (
						<li key={index}>
							<Link to={navbar.path} className="relative">
								{pathname === `/${navbar.path}` && (
									<div className="absolute inset-0 bg-indigo-500 shadow-lg transform rounded-lg"></div>
								)}
								<div
									className={`relative px-4 py-2 ${
										pathname === `/${navbar.path}` ? "text-white" : "text-gray-800"
									} font-medium text-lg`}
								>
									{navbar.name}
								</div>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
