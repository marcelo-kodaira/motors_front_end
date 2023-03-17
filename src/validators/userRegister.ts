import * as yup from 'yup';

export const userRegister = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('Email obrigatório').email('Email inválido'),
  cpf: yup.string().required('Cpf obrigatório').min(14, 'Minimo de 11 digitos'),
  cell: yup.string().required('Contato obrigatório'),
  birthdate: yup.string().required('Data de nascimento obrigatório'),
  description: yup.string().required('Descrição obrigatório'),
  address: yup.object().shape({
    cep: yup.string().required('Cep obrigatório'),
    state: yup.string().required('Estado obrigatório'),
    city: yup.string().required('Cidade Obrigatória'),
    road: yup.string().required('Rua obrigatorio'),
    number: yup.string().required('Número obrigatorio'),
    complemento: yup.string().notRequired(),
  }),
  is_buyer: yup.boolean().required('Tipo de Conta obrigatório'),
  password: yup.string().required('Senha obrigatório'),
  confirmPassword: yup
    .string()
    .required('Confirmação de senha obrigatória')
    .oneOf([yup.ref('password')], 'Senha não correspondem'),
});
