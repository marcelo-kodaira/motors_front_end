import * as S from "./style";
import Logo from "../../assets/Motors shop.png";
import { BiMenu } from "react-icons/bi";
import { B1600 } from "../../styles/typography";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { Avatar } from "../Avatar";
import { useNavigate } from "react-router-dom";
import { ModalEditProfile } from "../ModalEditProfile";
import { MenuContext } from "../../contexts/menuContext";
import { ModalEditAddress } from "../ModalEditAddress";

export const Header = () => {
  const { user, signOut } = useContext(AuthContext);
  const { getCoordinates } = useContext(MenuContext);

  const navigate = useNavigate();

  const pageVerify = (elem: string) => {
    const login = document.location.href.indexOf("login");
    const register = document.location.href.indexOf("register");
    const request = document.location.href.indexOf("request");
    const reset = document.location.href.indexOf("reset");
    const product = document.location.href.indexOf("product");

    if (
      login != -1 ||
      register != -1 ||
      request != -1 ||
      reset != -1 ||
      product != -1
    ) {
      navigate("/", { replace: true });
      const myTimeout = setTimeout(() => {
        getCoordinates(elem);
      }, 1200);
    } else {
      getCoordinates(elem);
    }
  };

  return (
    <S.ContainerHeader>
      <div id="width">
        <img
          src={Logo}
          alt=""
          onClick={() => navigate("/", { replace: true })}
        />

        <S.MenuWithoutUser>
          <BiMenu />
          <div>
            <ul>
              <li onClick={() => pageVerify("cars")}>Carros</li>
              <li onClick={() => pageVerify("motorbikes")}>Motos</li>
              <li onClick={() => pageVerify("auctions")}>Leilão</li>

              {user ? (
                <>
                  <ModalEditProfile />
                  <ModalEditAddress />

                  {!user.is_buyer && (
                    <li onClick={() => navigate("/myAds", { replace: true })}>
                      Meus Anúncios
                    </li>
                  )}
                  <li onClick={signOut}>Sair</li>
                </>
              ) : (
                <>
                  <li onClick={() => navigate("/login", { replace: true })}>
                    Fazer Login
                  </li>
                  <li onClick={() => navigate("/register", { replace: true })}>
                    Cadastrar
                  </li>
                </>
              )}
            </ul>
          </div>
        </S.MenuWithoutUser>
        <S.NavLinks>
          <S.Links>
            <B1600
              onClick={() => {
                pageVerify("cars");
              }}
            >
              Carros
            </B1600>
            <B1600
              onClick={() => {
                pageVerify("motorbikes");
              }}
            >
              Motos
            </B1600>
            <B1600
              onClick={() => {
                pageVerify("auctions");
              }}
            >
              Leilão
            </B1600>
          </S.Links>
          {user ? (
            <S.MenuWithUser>
              <Avatar username={user.name} />
              <span id="name">{user.name}</span>
              <div>
                <ul>
                  <ModalEditProfile />
                  <ModalEditAddress />
                  {!user.is_buyer && (
                    <li onClick={() => navigate("/myAds", { replace: true })}>
                      Meus Anúncios
                    </li>
                  )}
                  <li onClick={signOut}>Sair</li>
                </ul>
              </div>
            </S.MenuWithUser>
          ) : (
            <S.NavButtons>
              <button
                onClick={() => navigate("/login", { replace: true })}
                className="login"
              >
                Fazer login
              </button>
              <button
                onClick={() => navigate("/register", { replace: true })}
                className="register"
              >
                Cadastrar
              </button>
            </S.NavButtons>
          )}
        </S.NavLinks>
      </div>
    </S.ContainerHeader>
  );
};
