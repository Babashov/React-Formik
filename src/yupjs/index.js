import * as yup from 'yup';

const validationSchema = yup.object({
    email: yup.string().nullable().email().required(),
    password:yup.string().min(5).required(),
    passwordConfirm:yup.string().oneOf([yup.ref('password')]).min(5).required()
  });

export default validationSchema;
  