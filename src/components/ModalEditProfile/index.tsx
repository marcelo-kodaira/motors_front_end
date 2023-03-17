import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext, EditProfile } from "../../contexts/auth";
import { B2500, H7500 } from "../../styles/typography";
import { cpfMask, phoneMask } from "../../utils/masks";
import { Input } from "../Input";
import { ModalDeleteProfile } from "../ModalDeleteProfile";
import { Form } from "./styles";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "520px",
  maxHeight: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
};

export const ModalEditProfile = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openDeleteProfile, setOpenDeleteProfile] = useState(false);

  const { user, editProfile } = useContext(AuthContext);

  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");

  const { register, handleSubmit } = useForm<EditProfile>({
    defaultValues: {
      cpf: user?.cpf,
    },
  });

  const onSubmit = (data: EditProfile) => {
    console.log(data);
    if (user) {
      editProfile(data, user.id);
      handleClose();
    }
  };

  useEffect(() => {
    if (user) {
      setCpf(user.cpf);
      setPhone(user.cell);
    }
  }, [user]);

  return (
    <>
      <li onClick={handleOpen}>Editar Perfil</li>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <header>
              <H7500>Editar perfil</H7500>
              <span onClick={handleClose}>X</span>
            </header>

            <B2500>Infomações pessoais</B2500>
            <Input
              label="Nome"
              name="name"
              register={register}
              rules={{
                value: user?.name,
              }}
            />
            <Input
              label="Email"
              name="email"
              register={register}
              rules={{
                value: user?.email,
              }}
            />

            <Input
              label="CPF"
              name="cpf"
              register={register}
              value={cpf}
              rules={{
                onChange: (e) => setCpf(cpfMask(e.target.value)),
              }}
            />
            <Input
              label="Celular"
              name="cell"
              register={register}
              value={phone}
              rules={{
                onChange: (e) => setPhone(phoneMask(e.target.value)),
              }}
            />
            <Input
              label="Data de nascimento"
              type="date"
              name="birthdate"
              register={register}
              rules={{
                value: user?.birthdate,
              }}
            />
            <Input
              label="Descrição"
              name="description"
              register={register}
              rules={{
                value: user?.description,
              }}
            />

            <div className="groupButton">
              <button
                onClick={() => {
                  handleClose();
                  setOpenDeleteProfile(true);
                }}
              >
                Excluir conta
              </button>
              <button type="submit">Salvar Alterações</button>
            </div>
          </Form>
        </Box>
      </Modal>
      {user && openDeleteProfile && (
        <ModalDeleteProfile
          openModal={openDeleteProfile}
          setOpenModal={setOpenDeleteProfile}
          id={user.id}
        />
      )}
    </>
  );
};
