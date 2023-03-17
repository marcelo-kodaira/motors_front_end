import { createContext, ReactNode, useContext } from 'react';
import api from '../services/api';
import { AuthContext } from './auth';

export interface ICommentRequest {
  comment: string;
}

interface CommentContextData {
  createComment: (data: ICommentRequest, announcementId: string) => Promise<void>;
  editComment: (data: ICommentRequest, commentId: string) => Promise<void>;
  deleteComment: (commentId: string) => Promise<void>;
}

export const CommentContext = createContext({} as CommentContextData);

interface CommentProviderProps {
  children: ReactNode;
}

export const CommentProvider = ({ children }: CommentProviderProps) => {
  const { setReload } = useContext(AuthContext);

  const createComment = async (data: ICommentRequest, announcementId: string) => {
    try {
      await api.post(`announcements/${announcementId}/comment`, data);
      setReload((prevValue) => !prevValue);
    } catch (error) {
      console.error(error);
    }
  };

  const editComment = async (data: ICommentRequest, commentId: string) => {
    try {
      await api.patch(`comments/${commentId}`, data);
      setReload((prevValue) => !prevValue);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async (commentId: string) => {
    try {
      await api.delete(`comments/${commentId}`);
      setReload((prevValue) => !prevValue);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CommentContext.Provider value={{ createComment, editComment, deleteComment }}>
      {children}
    </CommentContext.Provider>
  );
};
