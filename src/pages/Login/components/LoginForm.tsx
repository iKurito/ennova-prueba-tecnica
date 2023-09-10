import { useFormik } from "formik";
import { loginSchema } from "../../../schemas";
import { useAuthContext } from "../../../context/auth.context";

export interface LoginFormData {
	email: string;
	password: string;
}

function LoginForm() {
	const { login } = useAuthContext();

	const { values, handleChange, handleSubmit, touched, errors } = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: loginSchema,
		onSubmit: async (form: LoginFormData) => {
			login(form);
		},
	});

	return (
		<div className="px-5 pb-5 bg-white md:flex-1">
			<h3 className="my-4 text-2xl font-semibold text-center">Iniciar Sesión</h3>
			<form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
				<div className="flex flex-col space-y-1">
					<label htmlFor="email" className="text-sm font-semibold text-gray-500">
						Correo electrónico
					</label>
					<input
						id="email"
						type="email"
						name="email"
						placeholder="Correo electrónico"
						className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-indigo-500"
						value={values.email}
						onChange={handleChange}
					/>
					{touched.email && errors.email && (
						<span className="text-xs text-red-500">{errors.email}</span>
					)}
				</div>
				<div className="flex flex-col space-y-1">
					<label htmlFor="password" className="text-sm font-semibold text-gray-500">
						Contraseña
					</label>
					<input
						id="password"
						type="password"
						name="password"
						placeholder="Contraseña"
						className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-indigo-500"
						value={values.password}
						onChange={handleChange}
					/>
					{touched.password && errors.password && (
						<span className="text-xs text-red-500">{errors.password}</span>
					)}
				</div>
				<div>
					<button
						type="submit"
						className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-indigo-500 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Inicia Sesión
					</button>
				</div>
			</form>
		</div>
	);
}

export default LoginForm;
