import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Footer from "../../components/footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { AuthContext, ILoginRequest } from "../../contexts/auth";
import { B1600, B2500, H5500 } from "../../styles/typography";
import * as S from "./styles";
import { authSchema } from "../../validators/auth";
import { useNavigate } from "react-router-dom";
import { Main } from "../../components/Main";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginRequest>({
    resolver: yupResolver(authSchema),
  });

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <Header />
      <Main>
        <S.Container>
          <S.ContainerLogin>
            <H5500>Login</H5500>

            <form onSubmit={handleSubmit(login)}>
              <Input
                label="Email"
                placeholder="email"
                name="email"
                register={register}
                errors={errors.email}
              />
              <Input
                label="Password"
                name="password"
                type="password"
                placeholder="senha"
                register={register}
                errors={errors.password}
              />

              <button type="submit">Entrar</button>

              <a href="http://localhost:5173/request-password">
                Esqueceu a senha?
              </a>
            </form>
            <div className="containerRegister">
              <B1600>Ainda nao tem uma conta?</B1600>
              <button onClick={() => navigate("/register", { replace: true })}>
                <B2500>Cadastrar</B2500>
              </button>
            </div>
          </S.ContainerLogin>
        </S.Container>
      </Main>
      <Footer />
    </>
  );
};
