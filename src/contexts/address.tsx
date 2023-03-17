import { AxiosResponse } from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import api from "../services/api";
import { AuthContext } from "./auth";

interface AddressProviderProps {
  children: ReactNode;
}

export interface IAddressRequest {
  cep: string;
  state: string;
  city: string;
  road: string;
  number: string;
  complement: string;
}

export interface IAddress extends IAddressRequest {
  id: string;
}

interface IAddressContext {
  editAddress: (
    data: IAddressRequest
  ) => Promise<AxiosResponse<any, any> | undefined>;
  cep: string;
  setCep: React.Dispatch<React.SetStateAction<string>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpen: () => void;
  handleClose: () => void;
  fail: boolean;
  setFail: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddressContext = createContext({} as IAddressContext);

export const AddressProvider = ({ children }: AddressProviderProps) => {
  const { user } = useContext(AuthContext);
  const [fail, setFail] = useState<boolean>(false);

  const [cep, setCep] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const editAddress = async (data: IAddressRequest) => {
    try {
      const res = await api.patch(`/address/${user?.address.id}`, data);

      handleClose();

      return res;
    } catch (error) {
      setFail(true);
      const myTimeout = setTimeout(() => {
        handleClose();
        setFail(false);
      }, 3000);
      console.error(error);
    }
  };

  return (
    <AddressContext.Provider
      value={{
        editAddress,
        cep,
        setCep,
        open,
        setOpen,
        handleOpen,
        handleClose,
        fail,
        setFail,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
