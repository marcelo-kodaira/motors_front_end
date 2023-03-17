import { useContext, useState } from 'react';
import { Announcement, Comment } from '../../contexts/announcement';
import { AuthContext } from '../../contexts/auth';
import { B2400, B2500, H6600 } from '../../styles/typography';
import { Avatar } from '../Avatar';
import { WriteComment } from '../WriteComment';
import { Container } from './styles';
import { BsTrash, BsPencil } from 'react-icons/bs';
import { ModalDeleteComment } from '../ModalDeleteComment';
import { ModalEditComment } from '../ModalEditComment';

interface CommentsProps {
  announcement: Announcement | null;
}

export const Comments = ({ announcement }: CommentsProps) => {
  const { user } = useContext(AuthContext);

  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const [commentId, setCommentId] = useState('');
  const [comment, setComment] = useState<Comment | null>(null);

  const monthDiff = (dateFrom: Date, dateTo: Date) => {
    return (
      dateTo.getMonth() - dateFrom.getMonth() + 12 * (dateTo.getFullYear() - dateFrom.getFullYear())
    );
  };

  const publishingTime = (date: string) => {
    const now = new Date();
    const publicationDate = new Date(date);
    const timeInMilliseconds = Math.abs(publicationDate.getTime() - now.getTime());
    const diffSec = Math.ceil(timeInMilliseconds / 1000);
    const diffMin = Math.ceil(timeInMilliseconds / (1000 * 60));
    const diffHour = Math.ceil(timeInMilliseconds / (1000 * 60 * 60));
    const diffDays = Math.ceil(timeInMilliseconds / (1000 * 60 * 60 * 24));
    const diffMonths = Math.abs(monthDiff(publicationDate, now));
    const diffYear = Math.abs(publicationDate.getFullYear() - now.getFullYear());

    if (diffSec < 60) {
      return 'agora';
    } else if (diffMin < 60) {
      return `há ${diffMin} ${diffMin === 1 ? 'minuto' : 'minutos'} atrás`;
    } else if (diffHour < 24) {
      return `há ${diffHour} ${diffHour === 1 ? 'hora' : 'horas'} atrás`;
    } else if (diffMonths < 1) {
      return `há ${diffDays} ${diffDays === 1 ? 'dia' : 'dias'} atrás`;
    } else if (diffYear < 1) {
      return `há ${diffMonths} ${diffMonths === 1 ? 'mês' : 'meses'} atrás`;
    } else if (diffYear >= 1) {
      return `há ${diffYear} ${diffYear === 1 ? 'ano' : 'anos'} atrás`;
    }
  };

  return (
    <Container>
      <div className="comments">
        <H6600>Comentários</H6600>
        <ul>
          {announcement && announcement.comments.length > 0
            ? announcement.comments.map((comment) => (
                <li key={comment.id}>
                  <div>
                    <Avatar username={comment.user.name} />
                    <B2500>{comment.user.name}</B2500>
                    <span className="time">{publishingTime(comment.created_at)}</span>
                  </div>
                  <div className="comment">
                    <B2400>{comment.comment}</B2400>
                    {user && comment.user.id == user.id && (
                      <div className="buttonGroup">
                        <button
                          onClick={() => {
                            setComment(comment);
                            setOpenModalEdit(true);
                          }}
                        >
                          <BsPencil size={16} />
                        </button>
                        <button
                          onClick={() => {
                            setCommentId(comment.id);
                            setOpenModalDelete(true);
                          }}
                        >
                          <BsTrash size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                </li>
              ))
            : 'Seja o primeiro a comentar'}
        </ul>
      </div>
      <WriteComment announcementId={announcement?.id} />
      {openModalDelete && commentId && (
        <ModalDeleteComment
          openModal={openModalDelete}
          setOpenModal={setOpenModalDelete}
          id={commentId}
        />
      )}
      {openModalEdit && comment && (
        <ModalEditComment
          openModal={openModalEdit}
          setOpenModal={setOpenModalEdit}
          comment={comment}
        />
      )}
    </Container>
  );
};
