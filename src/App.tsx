import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Navigate } from "react-router-dom";
import { RoutesWithNotFound } from "./utilities";
import { PrivateRoutes, PublicRoutes } from "./models";
import { AuthProvider } from "./context";
import { AuthGuard } from "./guards";
import { Provider } from "react-redux";
import store from "./redux/store";

const Login = lazy(() => import("./pages/Login/Login"));
const CustomForm = lazy(() => import("./pages/CustomForm/CustomForm"));
const Home = lazy(() => import("./pages/Home/Home"));

function App() {
	return (
		<>
			<div>
				<Suspense fallback={<div>Loading...</div>}>
					<AuthProvider>
						<Provider store={store}>
							<BrowserRouter>
								<RoutesWithNotFound>
									<Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
									<Route path={PublicRoutes.LOGIN} element={<Login />} />
									<Route element={<AuthGuard />}>
										<Route path={`${PrivateRoutes.HOME}/*`} element={<Home />} />
										<Route path={PrivateRoutes.CUSTOM_FORM} element={<CustomForm />} />
									</Route>
								</RoutesWithNotFound>
							</BrowserRouter>
						</Provider>
					</AuthProvider>
				</Suspense>
			</div>
		</>
	);
}

export default App;
