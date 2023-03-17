import { useFieldArray, useForm } from 'react-hook-form';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { B2500, H7500 } from '../../styles/typography';
import { InputRadio } from '../InputRadio';
import { Form } from './styles';
import { Input } from '../Input';
import {
  Announcement,
  AnnouncementContext,
  AnnouncementRequest,
} from '../../contexts/announcement';
import { Button } from '../ModalCreateAnnouncement/style';
import { yupResolver } from '@hookform/resolvers/yup';
import { createAnnouncementSchema } from '../../validators/createAnnouncement';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height: '90%',
  maxWidth: '520px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  px: 2,
  py: 4,
  overflow: 'scroll',
};

interface ModalEditAnnouncementProps {
  announcement: Announcement;
  setOpenModalDelete: Dispatch<SetStateAction<boolean>>;
}

export const ModalEditAnnouncement = ({
  announcement,
  setOpenModalDelete,
}: ModalEditAnnouncementProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const { editAnnouncement } = useContext(AnnouncementContext);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AnnouncementRequest>({
    resolver: yupResolver(createAnnouncementSchema),
    shouldUnregister: true,
    defaultValues: {
      images: announcement.images,
    },
  });
  const { fields, append } = useFieldArray({
    control,
    name: 'images',
  });

  const onSubmit = (data: AnnouncementRequest) => {
    editAnnouncement(data, announcement.id);
    handleClose();
  };

  return (
    <div>
      <button onClick={handleOpen}>Editar</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <header>
              <H7500>Editar anúncio</H7500>
              <span onClick={handleClose}>X</span>
            </header>

            <B2500>Tipo de anúncio</B2500>
            <div className="flex">
              <InputRadio
                label="Venda"
                id="venda"
                name="is_sale"
                value="true"
                checked={announcement.is_sale}
                register={register}
              />

              <InputRadio
                label="Leilão"
                id="leilao"
                name="is_sale"
                value="false"
                checked={!announcement.is_sale}
                register={register}
              />
            </div>

            <B2500>Infomações do veículo</B2500>
            <Input
              label="Titulo"
              name="title"
              register={register}
              errors={errors.title}
              rules={{
                value: announcement.title,
              }}
            />
            <div className="flex">
              <Input
                label="Ano"
                name="year"
                register={register}
                errors={errors.year}
                rules={{
                  value: announcement.year,
                }}
              />
              <Input
                label="Quilometragem"
                name="mileage"
                register={register}
                errors={errors.mileage}
                rules={{
                  value: announcement.mileage,
                }}
              />
              <Input
                label="Preço"
                name="price"
                register={register}
                errors={errors.price}
                rules={{
                  value: announcement.price,
                }}
              />
            </div>
            <Input
              label="Descrição"
              name="description"
              register={register}
              errors={errors.description}
              rules={{
                value: announcement.description,
              }}
            />
            <B2500>Tipo de veículo</B2500>
            <div className="flex">
              <InputRadio
                label="Carro"
                id="carro"
                name="is_car"
                value="true"
                register={register}
                checked={announcement.is_car}
              />

              <InputRadio
                label="Moto"
                id="moto"
                name="is_car"
                value="false"
                register={register}
                checked={!announcement.is_car}
              />
            </div>

            <B2500>Publicado</B2500>
            <div className="flex">
              <InputRadio
                label="Sim"
                id="sim"
                name="is_published"
                value="true"
                checked={announcement.is_published}
                register={register}
              />

              <InputRadio
                label="Não"
                id="nao"
                name="is_published"
                value="false"
                checked={!announcement.is_published}
                register={register}
              />
            </div>

            {fields.map((field, index) => {
              return (
                <Input
                  key={field.id}
                  label={index === 0 ? 'Imagem da Capa' : `${index}° Imagem da galeria`}
                  placeholder="Inserir URL da imagem"
                  name={`images.${index}.image_url`}
                  errors={errors.images && errors.images[index] && errors.images[index]!.image_url}
                  register={register}
                />
              );
            })}

            <Button type="button" onClick={() => append({ image_url: '' })}>
              Adicionar campo para imagem da galeria
            </Button>

            <div className="buttonGroup">
              <button
                type="button"
                onClick={() => {
                  handleClose();
                  setOpenModalDelete(true);
                }}
              >
                Excluir
              </button>
              <button type="submit">Salvar alterações</button>
            </div>
          </Form>
        </Box>
      </Modal>
    </div>
  );
};
