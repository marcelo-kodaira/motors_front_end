import Menu from "./style";

export const MenuSlide = ({ isHamburguerMenu }: any) => {
  return (
    <>
      <Menu isHamburguerMenu={isHamburguerMenu}>
        <a href="" target="_blank" className="carros">
          Carros
        </a>
        <a href="" target="_blank" className="motos">
          Motos
        </a>
        <a href="" target="_blank" className="leilao">
          Leilão
        </a>
        <a href="" target="_blank" className="login">
          Fazer login
        </a>
        <a href="" target="_blank" className="cadastrar">
          Cadastrar
        </a>
      </Menu>
    </>
  );
};
