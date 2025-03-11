import * as Yup from 'yup';

export const schemaValidationForm = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters long!')
    .required('Name is required!'),
  email: Yup.string()
    .email('Invalid email format!')
    .required('Email is required!'),
  phone: Yup.string()
    .required('Phone number is required!')
    .matches(/^[+0-9]{10,15}$/, 'Invalid number phone!'),
});
