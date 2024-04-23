// src/validationSchema.js
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/,
      'Password must contain at least one uppercase letter, one special character, and one lowercase letter'
    ),
});

export default validationSchema;
