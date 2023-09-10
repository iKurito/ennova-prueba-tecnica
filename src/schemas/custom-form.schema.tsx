import * as yup from "yup";

export const customFormSchema = yup.object().shape({
	names: yup.string().required("Se requiere"),
	lastnames: yup.string().required("Se requiere"),
	email: yup.string().email("Favor de ingresar un correo válido").required("Se require"),
	phone: yup.string().required("Se requiere"),
	dni: yup.string().required("Se requiere"),
	gender: yup.string().required("Se requiere"),
	civilStatus: yup.string().required("Se requiere"),
	bornDate: yup.string().required("Se requiere"),
});
