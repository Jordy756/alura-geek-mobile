import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required('El correo electrónico es obligatorio')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'El correo electrónico no tiene un formato válido'),
  password: Yup.string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .max(12, 'La contraseña no puede superar los 12 caracteres')
    .required('La contraseña es obligatoria')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/,
      'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial'
    )
});
