import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context";
import { LoginForm } from "./components";
import { PrivateRoutes } from "../../models";
import AuthLayout from "../../layouts/auth.layout";

function Login() {
	const { isLoggedIn } = useAuthContext();

	if (isLoggedIn) {
		return <Navigate replace to={`/${PrivateRoutes.HOME}`} />;
	}

	return (
		<AuthLayout title="Login">
			<div className="flex flex-col overflow-hidden bg-white rounded-2xl shadow-lg md:flex-row md:flex-1 sm:max-w-screen-md">
				<LoginForm />
			</div>
		</AuthLayout>
	);
}

export default Login;
