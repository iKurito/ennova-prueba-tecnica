import { createContext, useContext, useState } from "react";
import { LoginFormData } from "../pages/Login/components/LoginForm";

interface AuthContextProps {
	isLoggedIn: boolean;
	login: (form: LoginFormData) => void;
	logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

interface Props {
	children: JSX.Element | JSX.Element[];
}

export function AuthProvider({ children }: Props) {
	const [isLoggedIn, setIsLoggedIn] = useState(() => {
		const auth = localStorage.getItem("auth");
		return auth ? true : false;
	});

	const login = (form: LoginFormData) => {
		localStorage.setItem("auth", JSON.stringify(form));
		setIsLoggedIn(true);
	};

	const logout = () => {
		localStorage.removeItem("auth");
		setIsLoggedIn(false);
	};

	return (
		<AuthContext.Provider value={{ isLoggedIn, login, logout }}>{children}</AuthContext.Provider>
	);
}

export const useAuthContext = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("LoginContext must be used within a LoginProvider");
	}
	return context;
};
