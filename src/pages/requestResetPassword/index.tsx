import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "../../components/footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Main } from "../../components/Main";
import { AuthContext, IRequestReset } from "../../contexts/auth";
import { requestSchema } from "../../validators/requestReset";
import { Container, Form } from "./style";

export const RequestResetPassword = () => {
  const { request, isRequest } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRequestReset>({
    resolver: yupResolver(requestSchema),
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <Container>
      <Header />
      <Main>
        <Form onSubmit={handleSubmit(request)}>
          <h2>Solicitar recuperação de senha</h2>
          <Input
            label="Email"
            placeholder="Digite o email"
            name="email"
            register={register}
            errors={errors.email}
          />
          <button type="submit">Enviar</button>
          {isRequest && (
            <p>
              Você irá receber um email com o link para redefinir sua senha!
            </p>
          )}
        </Form>
      </Main>
      <Footer />
    </Container>
  );
};
