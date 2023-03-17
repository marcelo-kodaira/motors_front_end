import { useContext } from "react";
import { MenuContext } from "../../contexts/menuContext";
import { Hamburguer } from "./style";

export const MenuHamburguer = () => {
  const { HamburgerMenuStatus, isHamburguerMenu } = useContext(MenuContext);
  return (
    <>
      <Hamburguer
        onClick={() => HamburgerMenuStatus()}
        isHamburguerMenu={isHamburguerMenu}
      >
        <section className="bar1" />
        <section className="bar2" />
        <section className="bar3" />
      </Hamburguer>
    </>
  );
};
