import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  AddressContext,
  IAddress,
  IAddressRequest,
} from "../../contexts/address";
import { editAddressSchema } from "../../validators/editAddress";
import { Input } from "../Input";
import { ContainerInputs, Fail, FormStyle, Success } from "./style";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { AuthContext } from "../../contexts/auth";
import { cepMask } from "../../utils/masks";

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

export const ModalEditAddress = () => {
  const { editAddress, cep, handleClose, handleOpen, open, setCep, fail } =
    useContext(AddressContext);
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IAddressRequest>({
    resolver: yupResolver(editAddressSchema),
  });

  const onSubmit = (data: IAddressRequest) => {
    editAddress(data);
  };

  useEffect(() => {
    if (user) {
      setCep(user.address.cep);
    }
  }, [user]);

  return (
    <>
      <li onClick={handleOpen}>Editar Endereço</li>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {!fail ? (
            <FormStyle onSubmit={handleSubmit(onSubmit)}>
              <div>
                <h2>Editar endereço</h2>
                <button onClick={() => handleClose()}>+</button>
              </div>
              <h3>Informações de endereço</h3>
              <ContainerInputs>
                <Input
                  label="CEP"
                  id="cep"
                  name="cep"
                  value={cepMask(cep)}
                  rules={{
                    onChange: (e) => setCep(cepMask(e.target.value)),
                  }}
                  register={register}
                />
                <div>
                  <Input
                    label="Estado"
                    id="state"
                    name="state"
                    rules={{
                      value: user?.address.state,
                    }}
                    register={register}
                  />
                  <Input
                    label="Cidade"
                    id="city"
                    name="city"
                    rules={{
                      value: user?.address.city,
                    }}
                    register={register}
                  />
                </div>
                <Input
                  label="Rua"
                  id="road"
                  name="road"
                  rules={{
                    value: user?.address.road,
                  }}
                  register={register}
                />
                <div>
                  <Input
                    label="Numero"
                    id="number"
                    name="number"
                    rules={{
                      value: user?.address.number,
                    }}
                    register={register}
                  />
                  <Input
                    label="Complemento"
                    id="complement"
                    name="complement"
                    rules={{
                      value: user?.address.complement,
                    }}
                    register={register}
                  />
                </div>
              </ContainerInputs>
              <section>
                <button onClick={() => handleClose()}>Cancelar</button>
                <button type="submit">Salvar Alterações</button>
              </section>
            </FormStyle>
          ) : (
            <Fail>Erro ao atualizar o endereço!</Fail>
          )}
        </Box>
      </Modal>
    </>
  );
};
