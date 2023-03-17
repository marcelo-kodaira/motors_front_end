import * as yup from 'yup';

export const createAnnouncementSchema = yup.object().shape({
  is_sale: yup.boolean().required('Tipo de anúncio obrigatório'),
  title: yup
    .string()
    .required('Título obrigatório')
    .max(60, 'O título pode ter no máximo precisa ter no máximo 60 caracteres'),
  year: yup.string().required('Ano obrigatório'),
  mileage: yup.string().required('Quilometragem obrigatória'),
  price: yup
    .string()
    .required('Preço obrigatório')
    .max(8, 'O preço não pode ter mais que 8 dígitos'),
  description: yup.string().required('Descrição obrigatória'),
  is_car: yup.boolean().required('Tipo de veículo obrigatório'),
  is_published: yup.boolean(),
  images: yup.array().of(
    yup.object().shape({
      image_url: yup
        .string()
        .url('Url da imagem precisa ser válida')
        .required('Url da imagem Obrigatória'),
    })
  ),
});
