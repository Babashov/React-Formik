import * as yup from 'yup';

const validationSchema = yup.object({
    email: yup.string().nullable().email('Email duzgun yazilmayib').required('Mutleq daxil olunmalidir'),
    password:yup.string().min(5,'En az 5 herifden ibaret olmalidir').required('Mutleq daxil olunmalidir'),
    passwordConfirm:yup.string().oneOf([yup.ref('password')],'Sifre uygun gelmir').min(5,'En az 5 herifden ibaret olmalidir').required('Mutleq daxil olunmalidir')
  });

export default validationSchema;
  