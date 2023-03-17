import { Action } from "@remix-run/router";
import { createContext, useEffect, useState } from "react";

interface IChildrenContext {
  children: React.ReactNode;
}

interface IMenuContext {
  isHamburguerMenu: boolean;
  setIsHamburguerMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenMenu: boolean;
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  HamburgerMenuStatus: () => void;
  getCoordinates: (elem: string) => void;
}

export const MenuContext = createContext({} as IMenuContext);

const MenuProvider = ({ children }: IChildrenContext) => {
  const [isHamburguerMenu, setIsHamburguerMenu] = useState<boolean>(false);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const HamburgerMenuStatus = () => {
    if (isHamburguerMenu) {
      setIsHamburguerMenu(false);
    } else {
      setIsHamburguerMenu(true);
    }
  };

  const getCoordinates = async (elem: string) => {
    const redirect = document.getElementById(elem);

    const coordinates = redirect!.getBoundingClientRect();

    window.scrollTo({ top: coordinates.top, behavior: "smooth" });
  };

  useEffect(() => {
    let timer: any;
    if (isHamburguerMenu) {
      setIsOpenMenu(true);
    } else {
      timer = setTimeout(() => {
        setIsOpenMenu(false);
      }, 500);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isHamburguerMenu]);

  return (
    <MenuContext.Provider
      value={{
        isHamburguerMenu,
        setIsHamburguerMenu,
        isOpenMenu,
        setIsOpenMenu,
        HamburgerMenuStatus,
        getCoordinates,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
