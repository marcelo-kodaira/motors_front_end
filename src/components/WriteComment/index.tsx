import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/auth';
import { CommentContext, ICommentRequest } from '../../contexts/comment';
import { B2500 } from '../../styles/typography';
import { commentSchema } from '../../validators/comment';
import { Avatar } from '../Avatar';
import { StyledContainer, StyledRecommendantions, StyledTextDiv } from './style';

interface WriteCommentProps {
  announcementId?: string;
}

export const WriteComment = ({ announcementId }: WriteCommentProps) => {
  const { user, signOut } = useContext(AuthContext);
  const { createComment } = useContext(CommentContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICommentRequest>({
    resolver: yupResolver(commentSchema),
  });

  const onSubmit = (data: ICommentRequest) => {
    if (user && announcementId) {
      createComment(data, announcementId);
      reset();
    } else {
      signOut();
    }
  };

  return (
    <StyledContainer>
      {user && (
        <div className="avatar">
          <Avatar username={user.name} />
          <B2500>{user.name}</B2500>
        </div>
      )}

      <StyledTextDiv
        user={!!user}
        errors={!!errors.comment?.message}
        onSubmit={handleSubmit(onSubmit)}
      >
        <textarea
          id="story"
          {...register('comment')}
          rows={7}
          cols={120}
          placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
        ></textarea>

        <button type="submit">Comentar</button>
      </StyledTextDiv>

      <StyledRecommendantions>
        <button type="button">Gostei muito!</button>
        <button type="button">Incrível</button>
        <button type="button">Recomendarei para meus amigos!</button>
      </StyledRecommendantions>
    </StyledContainer>
  );
};
