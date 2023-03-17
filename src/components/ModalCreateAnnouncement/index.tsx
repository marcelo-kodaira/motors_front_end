import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createAnnouncementSchema } from '../../validators/createAnnouncement';
import { Button, Form, ModalStyle } from './style';
import { B2500, H5500 } from '../../styles/typography';
import { InputRadio } from '../InputRadio';
import { ErrorMessage } from '../Input/styles';
import { Input } from '../Input';
import { AnnouncementContext, AnnouncementRequest } from '../../contexts/announcement';
import { Dispatch, SetStateAction, useContext, useState } from 'react';

interface ModalCreateAnnouncementProps {
  setOpenModalSuccess: Dispatch<SetStateAction<boolean>>;
}

export const ModalCreateAnnouncement = ({ setOpenModalSuccess }: ModalCreateAnnouncementProps) => {
  const {
    register,
    handleSubmit,
    reset,
    control,

    formState: { errors },
  } = useForm<AnnouncementRequest>({
    resolver: yupResolver(createAnnouncementSchema),
    defaultValues: {
      images: [{ image_url: '' }, { image_url: '' }],
    },
  });

  const { createAnnouncement } = useContext(AnnouncementContext);
  const { fields, append } = useFieldArray({
    control,
    name: 'images',
  });

  const [isAuction, setIsAuction] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const onSubmit = async (data: AnnouncementRequest) => {
    if (await createAnnouncement(data)) {
      handleClose();
      setOpenModalSuccess(true);
    }
  };

  return (
    <div>
      <button onClick={handleOpen}>Criar anuncio</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <H5500 id="aria-labelledby">Criar anúncio</H5500>
            <B2500>Tipo de anúncio</B2500>
            <div className="flex">
              <InputRadio
                id="venda"
                label="Venda"
                name="is_sale"
                value="true"
                onClick={() => setIsAuction(false)}
                register={register}
                checked={true}
              />
              <InputRadio
                id="leilao"
                label="Leilão"
                name="is_sale"
                value="false"
                onClick={() => setIsAuction(true)}
                register={register}
              />
            </div>
            {errors.is_sale && <ErrorMessage>Escolha uma das opções acima</ErrorMessage>}

            <B2500>Informações do veículo</B2500>

            <Input
              label="Título"
              placeholder="Digitar o título"
              name="title"
              register={register}
              errors={errors.title}
            />

            <div className="flex">
              <Input
                label="Ano"
                placeholder="Digitar ano"
                name="year"
                maxLength={4}
                register={register}
                errors={errors.year}
              />
              <Input
                label="Quilometragem"
                placeholder="0"
                name="mileage"
                maxLength={8}
                register={register}
                errors={errors.mileage}
              />
              <Input
                label={isAuction ? 'Lance Incial' : 'Preço'}
                placeholder="Digitar preço"
                name="price"
                maxLength={10}
                register={register}
                errors={errors.price}
              />
            </div>

            <Input
              label="Descrição"
              name="description"
              register={register}
              placeholder="Digitar descrição"
            ></Input>

            <B2500>Tipo de veículo</B2500>
            <div className="flex">
              <InputRadio
                id="carro"
                label="Carro"
                name="is_car"
                value="true"
                register={register}
                checked={true}
              />
              <InputRadio id="moto" label="Moto" name="is_car" value="false" register={register} />
            </div>
            {errors.is_sale && <ErrorMessage>Escolha uma das opções acima</ErrorMessage>}

            {fields.map((field, index) => {
              return (
                <Input
                  key={field.id}
                  label={index === 0 ? 'Imagem da Capa' : `${index}° Imagem da galeria`}
                  placeholder="Inserir URL da imagem"
                  name={`images.${index}.image_url`}
                  register={register}
                  errors={errors.images && errors.images[index] && errors.images[index]!.image_url}
                />
              );
            })}

            <Button type="button" onClick={() => append({ image_url: '' })}>
              Adicionar campo para imagem da galeria
            </Button>
            <div className="buttonGroup">
              <button onClick={() => handleClose()} type="button">
                Cancelar
              </button>
              <button type="submit">Criar anuncio</button>
            </div>
          </Form>
        </Box>
      </Modal>
    </div>
  );
};
