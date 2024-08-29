import * as Yup from 'yup'

export const RegisterSchema = Yup.object({
    nameSurname: Yup.string().required('Name boş olamaz!'),
    email: Yup.string().email('Email formatı uygun değil'),
    password: Yup.string().max(15, 'en fazla 15 karakter').min(5, 'en az 5 karakter')
})