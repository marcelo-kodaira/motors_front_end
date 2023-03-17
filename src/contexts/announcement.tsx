import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../services/api";
import { AuthContext, IUser } from "./auth";

export interface Comment {
  id: string;
  comment: string;
  user: IUser;
  created_at: string;
}

export interface Image {
  id: string;
  image_url: string;
}

export interface Announcement {
  id: string;
  is_sale: boolean;
  title: string;
  year: string;
  mileage: string;
  price: string;
  description: string;
  is_car: boolean;
  is_published: boolean;
  comments: Comment[];
  images: Image[];
  user: Omit<IUser, "announcements">;
}

export interface AnnouncementRequest
  extends Omit<Announcement, "id" | "comments" | "images" | "user"> {
  images: Omit<Image, "id">[];
}

interface AnnouncementContextData {
  announcements: Announcement[];
  setAnnouncements: Dispatch<SetStateAction<Announcement[]>>;
  createAnnouncement: (data: AnnouncementRequest) => Promise<boolean>;
  editAnnouncement: (data: AnnouncementRequest, id: string) => Promise<void>;
  deleteAnnouncement: (id: string) => Promise<void>;
}

export const AnnouncementContext = createContext({} as AnnouncementContextData);

interface AnnouncementProviderProps {
  children: ReactNode;
}

export const AnnouncementProvider = ({
  children,
}: AnnouncementProviderProps) => {
  const { reload, setReload } = useContext(AuthContext);

  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    getAnnouncements();
  }, [reload]);

  const getAnnouncements = async () => {
    try {
      const resp = await api.get("/announcements");
      setAnnouncements(resp.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createAnnouncement = async (data: AnnouncementRequest) => {
    try {
      await api.post("/announcements", data);
      setReload((prevValue) => !prevValue);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const editAnnouncement = async (data: AnnouncementRequest, id: string) => {
    try {
      await api.patch(`/announcements/${id}`, data);
      setReload((prevValue) => !prevValue);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteAnnouncement = async (id: string) => {
    try {
      await api.delete(`/announcements/${id}`);
      setReload((prevValue) => !prevValue);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AnnouncementContext.Provider
      value={{
        announcements,
        createAnnouncement,
        setAnnouncements,
        editAnnouncement,
        deleteAnnouncement,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};
