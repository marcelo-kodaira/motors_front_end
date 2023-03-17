import { AxiosResponse } from "axios";
import {
  ReactNode,
  createContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../services/api";
import { Announcement } from "./announcement";

export interface EditProfile {
  name: string;
  email: string;
  cpf: string;
  cell: string;
  birthdate: string;
  description: string;
}
interface Address {
  cep: string;
  state: string;
  city: string;
  road: string;
  number: string;
  complement: string;
}

export interface ISignInRequest {
  name: string;
  email: string;
  cpf: string;
  cell: string;
  birthdate: string;
  description: string;
  password: string;
  is_buyer: boolean;
  address: Address;
}

export interface ILoginRequest {
  email: string;
  password: string;
}
export interface IUser extends Omit<ISignInRequest, "password" | "address"> {
  id: string;
  address: Address & { id: string };
  announcements: Announcement[];
}

export interface IRequestReset {
  email: string;
}

export interface IReset {
  token: string;
  password: string;
  confirmPassword: string;
}

interface AuthContextData {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  login: (data: ILoginRequest) => Promise<void>;
  signIn: (data: ISignInRequest) => Promise<boolean>;
  signOut: () => void;
  reload: boolean;
  setReload: Dispatch<SetStateAction<boolean>>;
  editProfile: (data: EditProfile, userId: string) => Promise<void>;
  request: (data: IRequestReset) => Promise<void>;
  isRequest: boolean;
  setIsRequest: Dispatch<SetStateAction<boolean>>;
  reset: (data: IReset) => Promise<AxiosResponse<any, any> | undefined>;
  isReset: boolean;
  setIsReset: Dispatch<SetStateAction<boolean>>;
  deleteProfile: (userId: string) => Promise<void>;
  tokenReset: string;
  setTokenReset: Dispatch<SetStateAction<string>>;
}

export const AuthContext = createContext({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<IUser | null>(null);
  const [reload, setReload] = useState(false);
  const [isRequest, setIsRequest] = useState<boolean>(false);
  const [isReset, setIsReset] = useState<boolean>(false);
  const [tokenReset, setTokenReset] = useState<string>("");

  useEffect(() => {
    const token = localStorage.getItem("@motors:token");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      api
        .get("/profile")
        .then((response) => {
          setUser(response.data);
          if (
            location.pathname == "/login" ||
            location.pathname == "/register"
          ) {
            navigate(-1);
          } else {
            navigate(location.pathname, { replace: true });
          }
        })
        .catch((error) => {
          signOut();
        });
    }
  }, [reload]);

  const login = async (data: ILoginRequest) => {
    try {
      const resp = await api.post("/login", data);

      localStorage.setItem("@motors:token", resp.data.token);

      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${resp.data.token}`;

      setUser(resp.data.user);

      navigate("/", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  const request = async (data: IRequestReset) => {
    try {
      const resp = await api.post("/users/request-password", data);

      setIsRequest(true);
      console.log(resp.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  const reset = async (data: IReset) => {
    try {
      if (data.password == data.confirmPassword) {
        const resp = await api.post(
          `/users/reset-password?token=${tokenReset}`,
          data
        );
        setIsReset(true);

        const timer = setTimeout(() => {
          navigate("/login", { replace: true });
        }, 5000);

        return resp;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const signIn = async (data: ISignInRequest) => {
    try {
      const resp = await api.post("/users", data);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  const editProfile = async (data: EditProfile, userId: string) => {
    try {
      await api.patch(`/users/${userId}`, data);
      setReload((prevValue) => !prevValue);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProfile = async (userId: string) => {
    try {
      await api.delete(`/users/${userId}`);
      setReload((prevValue) => !prevValue);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        user,
        setUser,
        signIn,
        signOut,
        reload,
        setReload,
        editProfile,
        request,
        isRequest,
        setIsRequest,
        reset,
        isReset,
        setIsReset,
        deleteProfile,
        tokenReset,
        setTokenReset,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
