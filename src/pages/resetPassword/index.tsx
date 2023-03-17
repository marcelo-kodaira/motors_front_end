import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import Footer from "../../components/footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Main } from "../../components/Main";
import { AuthContext, IReset } from "../../contexts/auth";
import { resetSchema } from "../../validators/requestReset";
import { Container, Form } from "./style";

export const ResetPassword = (props: any) => {
  const { reset, isReset, setTokenReset } = useContext(AuthContext);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  useEffect(() => {
    if (token) {
      setTokenReset(token);
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IReset>({
    resolver: yupResolver(resetSchema),
  });

  return (
    <Container>
      <Header />
      <Main>
        {isReset ? (
          <Form>
            <h2>Senha atualizada!</h2>
            <p>Você será redirecionado para fazer o login!</p>
          </Form>
        ) : (
          <Form onSubmit={handleSubmit(reset)}>
            <h2>Redefinir senha</h2>
            <Input
              label="Nova senha"
              placeholder="Digite a senha"
              name="password"
              register={register}
              errors={errors.password}
            />
            <Input
              label="Confirmar senha"
              placeholder="Digite novamente a senha"
              name="confirmPassword"
              register={register}
              errors={errors.confirmPassword}
            />
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Main>
      <Footer />
    </Container>
  );
};
