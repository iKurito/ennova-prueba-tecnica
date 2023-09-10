import * as yup from "yup";

export const loginSchema = yup.object().shape({
	email: yup.string().email("Favor de ingresar un correo válido").required("Se require"),
	password: yup.string().required("Se requiere"),
});
