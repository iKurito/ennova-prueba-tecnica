import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context";
import { PublicRoutes } from "../models";
import { Navbar } from "../components/Navbar";

function AuthGuard() {
	const { isLoggedIn } = useAuthContext();

	if (!isLoggedIn) {
		return <Navigate replace to={PublicRoutes.LOGIN} />;
	}

	return (
		<>
			<div className="h-screen bg-gray-100 transform-none w-full">
				<Navbar />
				<main className="px-4 md:px-8 py-4 bg-gray-100 justify-center">
					<Outlet />
				</main>
			</div>
		</>
	);
}

export default AuthGuard;
