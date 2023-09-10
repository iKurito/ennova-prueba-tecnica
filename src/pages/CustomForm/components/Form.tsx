import { useFormik } from "formik";
import { customFormSchema } from "../../../schemas";

interface CustomFormData {
	names: string;
	lastnames: string;
	email: string;
	phone: string;
	dni: string;
	gender: string;
	civilStatus: string;
	bornDate: string;
}

function Form() {
	const { values, handleChange, handleSubmit, touched, errors } = useFormik({
		initialValues: {
			names: "",
			lastnames: "",
			email: "",
			phone: "",
			dni: "",
			gender: "",
			civilStatus: "",
			bornDate: "",
		},
		validationSchema: customFormSchema,
		onSubmit: async (form: CustomFormData) => {
			console.log(form);
		},
	});

	return (
		<form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={handleSubmit}>
			<div className="flex flex-col space-y-1">
				<label htmlFor="names" className="text-sm font-semibold text-gray-500">
					Nombres
				</label>
				<input
					id="names"
					type="text"
					name="names"
					placeholder="Ronaldo"
					className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-indigo-500"
					value={values.email}
					onChange={handleChange}
				/>
				{touched.email && errors.email && (
					<span className="text-xs text-red-500">{errors.email}</span>
				)}
			</div>
			<div className="flex flex-col space-y-1">
				<label htmlFor="lastnames" className="text-sm font-semibold text-gray-500">
					Apellidos
				</label>
				<input
					id="lastnames"
					type="text"
					name="lastnames"
					placeholder="Tunque"
					className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-indigo-500"
					value={values.lastnames}
					onChange={handleChange}
				/>
				{touched.lastnames && errors.lastnames && (
					<span className="text-xs text-red-500">{errors.lastnames}</span>
				)}
			</div>
			<div className="flex flex-col space-y-1">
				<label htmlFor="email" className="text-sm font-semibold text-gray-500">
					Correo electrónico
				</label>
				<input
					id="email"
					type="email"
					name="email"
					placeholder="kurito.dev@gmail.com"
					className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-indigo-500"
					value={values.email}
					onChange={handleChange}
				/>
				{touched.email && errors.email && (
					<span className="text-xs text-red-500">{errors.email}</span>
				)}
			</div>
			<div className="flex flex-col space-y-1">
				<label htmlFor="phone" className="text-sm font-semibold text-gray-500">
					Teléfono
				</label>
				<input
					id="phone"
					type="tel"
					name="phone"
					placeholder="+51 999 999 999"
					className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-indigo-500"
					value={values.phone}
					onChange={handleChange}
				/>
				{touched.phone && errors.phone && (
					<span className="text-xs text-red-500">{errors.phone}</span>
				)}
			</div>
			<div className="flex flex-col space-y-1">
				<label htmlFor="dni" className="text-sm font-semibold text-gray-500">
					DNI
				</label>
				<input
					id="dni"
					type="number"
					name="dni"
					placeholder="12345678"
					className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-indigo-500"
					value={values.dni}
					onChange={handleChange}
				/>
				{touched.dni && errors.dni && <span className="text-xs text-red-500">{errors.dni}</span>}
			</div>
			<div className="flex flex-col space-y-1">
				<label htmlFor="gender" className="text-sm font-semibold text-gray-500">
					Género
				</label>
				<input
					id="gender"
					type="text"
					name="gender"
					placeholder="Masculino"
					className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-indigo-500"
					value={values.gender}
					onChange={handleChange}
				/>
				{touched.gender && errors.gender && (
					<span className="text-xs text-red-500">{errors.gender}</span>
				)}
			</div>
			<div className="flex flex-col space-y-1">
				<label htmlFor="civilStatus" className="text-sm font-semibold text-gray-500">
					Estado Civil
				</label>
				<input
					id="civilStatus"
					type="text"
					name="civilStatus"
					placeholder="Casado"
					className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-indigo-500"
					value={values.civilStatus}
					onChange={handleChange}
				/>
				{touched.civilStatus && errors.civilStatus && (
					<span className="text-xs text-red-500">{errors.civilStatus}</span>
				)}
			</div>
			<div className="flex flex-col space-y-1">
				<label htmlFor="bornDate" className="text-sm font-semibold text-gray-500">
					Fecha de Nacimiento
				</label>
				<input
					id="bornDate"
					type="date"
					name="bornDate"
					className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-indigo-500"
					value={values.bornDate}
					onChange={handleChange}
				/>
				{touched.bornDate && errors.bornDate && (
					<span className="text-xs text-red-500">{errors.bornDate}</span>
				)}
			</div>
			<div className="col-span-2">
				<button
					type="submit"
					className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-indigo-500 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Enviar Cuestionario
				</button>
			</div>
		</form>
	);
}

export default Form;
