import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../components/Input";
import { InputRadio } from "../../components/InputRadio";
import { B2500, H5500 } from "../../styles/typography";
import { cepMask, cpfMask, phoneMask } from "../../utils/masks";
import { Button, Container, Form } from "./styles";
import { userRegister } from "../../validators/userRegister";
import { ErrorMessage } from "../../components/Input/styles";
import Footer from "../../components/footer";
import { Header } from "../../components/Header";
import { AuthContext, ISignInRequest } from "../../contexts/auth";
import { ModalSuccess } from "../../components/ModalSuccess";
import { Main } from "../../components/Main";

interface IUserRegisterForm extends ISignInRequest {
  confirmPassword: string;
}

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegisterForm>({
    resolver: yupResolver(userRegister),
  });

  const { signIn } = useContext(AuthContext);

  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [phone, setPhone] = useState("");

  const [openModalSucces, setOpenModalSuccess] = useState(false);

  const onSubmit = async (data: IUserRegisterForm) => {
    const { confirmPassword, ...rest } = data;
    if (await signIn(rest)) {
      setOpenModalSuccess(true);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Container>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <H5500>Cadastro</H5500>
            <B2500>Informações pessoais</B2500>
            <Input
              label="Nome"
              placeholder="Ex: Samuel Leão"
              name="name"
              register={register}
              errors={errors.name}
            />
            <Input
              label="Email"
              placeholder="Ex: samuel@kenzie.com.br"
              name="email"
              register={register}
              errors={errors.email}
            />
            <Input
              label="CPF"
              placeholder="000.000.000-00"
              name="cpf"
              register={register}
              errors={errors.cpf}
              value={cpf}
              rules={{
                onChange: (e) => setCpf(cpfMask(e.target.value)),
              }}
            />
            <Input
              label="Celular"
              placeholder="(DDD) 90000-0000"
              name="cell"
              register={register}
              errors={errors.cell}
              value={phone}
              rules={{
                onChange: (e) => setPhone(phoneMask(e.target.value)),
              }}
            />
            <Input
              label="Data de Nascimento"
              type="date"
              name="birthdate"
              register={register}
              errors={errors.birthdate}
            />
            <Input
              label="Descrição"
              placeholder="Digitar descrição"
              name="description"
              register={register}
              errors={errors.description}
            />
            <B2500>Informações de endereço</B2500>
            <Input
              label="CEP"
              placeholder="00000-000"
              name="address.cep"
              register={register}
              errors={errors.address?.cep}
              value={cep}
              rules={{
                onChange: (e) => setCep(cepMask(e.target.value)),
              }}
            />
            <div className="flex">
              <Input
                label="Estado"
                placeholder="Digitar Estado"
                name="address.state"
                register={register}
                errors={errors.address?.state}
              />
              <Input
                label="Cidade"
                placeholder="Digitar Cidade"
                name="address.city"
                register={register}
                errors={errors.address?.city}
              />
            </div>
            <Input
              label="Rua"
              placeholder="Digitar rua"
              name="address.road"
              register={register}
              errors={errors.address?.road}
            />
            <div className="flex">
              <Input
                label="Numero"
                placeholder="Digitar numero"
                name="address.number"
                register={register}
                errors={errors.address?.number}
              />
              <Input
                label="Complemento"
                placeholder="Ex: apart 307"
                name="address.complement"
                register={register}
                errors={errors.address?.complement}
              />
            </div>
            <B2500>Tipo de conta</B2500>
            <div className="flex">
              <InputRadio
                id="comprador"
                label="Comprador"
                name="is_buyer"
                value="true"
                checked={true}
                register={register}
              />
              <InputRadio
                id="anunciante"
                label="Anunciante"
                name="is_buyer"
                value="false"
                register={register}
              />
            </div>
            {errors.is_buyer && (
              <ErrorMessage>Escolha uma das opções acima</ErrorMessage>
            )}

            <Input
              label="Senha"
              type="password"
              placeholder="Digitar senha"
              name="password"
              register={register}
              errors={errors.password}
            />
            <Input
              label="Confirmar senha"
              type="password"
              placeholder="confirmar senha"
              name="confirmPassword"
              register={register}
              errors={errors.confirmPassword}
            />
            <Button type="submit">Finalizar cadastro</Button>
          </Form>
        </Container>
      </Main>
      <Footer />
      {openModalSucces && (
        <ModalSuccess
          variant="registro"
          openModal={openModalSucces}
          setOpenModal={setOpenModalSuccess}
        />
      )}
    </>
  );
};
