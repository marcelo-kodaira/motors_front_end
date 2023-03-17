import * as yup from "yup";

export const editAddressSchema = yup.object().shape({
  cep: yup.string().required("Cep obrigatório"),
  state: yup.string().required("Estado obrigatório"),
  city: yup.string().required("Cidade Obrigatória"),
  road: yup.string().required("Rua obrigatorio"),
  number: yup.string().required("Número obrigatorio"),
  complement: yup.string().notRequired(),
});
