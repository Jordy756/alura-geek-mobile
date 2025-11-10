import * as Yup from 'yup';

export const contactSchema = Yup.object().shape({
  name: Yup.string()
    .required('El nombre es obligatorio')
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no debe exceder los 50 caracteres')
    .matches(
      /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+( [A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)+$/,
      'El nombre debe contener al menos un nombre y un apellido, ambos comenzando con mayúscula'
    ),
  message: Yup.string()
    .required('El mensaje es obligatorio')
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(500, 'El mensaje no debe exceder los 500 caracteres')
});
