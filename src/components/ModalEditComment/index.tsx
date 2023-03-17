import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Dispatch, SetStateAction, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Comment } from '../../contexts/announcement';
import { CommentContext, ICommentRequest } from '../../contexts/comment';
import { H7500 } from '../../styles/typography';
import { commentSchema } from '../../validators/comment';
import { ErrorMessage } from '../Input/styles';
import { Form } from './styles';
import { Container } from './styles';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface ModalEditCommentProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  comment: Comment;
}

export const ModalEditComment = ({ openModal, setOpenModal, comment }: ModalEditCommentProps) => {
  const { editComment } = useContext(CommentContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICommentRequest>({
    resolver: yupResolver(commentSchema),
  });

  const onSubmit = (data: ICommentRequest) => {
    editComment(data, comment.id);
    setOpenModal(false);
  };

  return (
    <div>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container>
            <header>
              <H7500>Editar Commentário</H7500>
              <span
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                X
              </span>
            </header>

            <Form error={!!errors.comment} onSubmit={handleSubmit(onSubmit)}>
              <textarea
                spellCheck="false"
                {...register('comment', {
                  value: comment.comment,
                })}
              ></textarea>
              {errors.comment && <ErrorMessage>Campo obrigatorio</ErrorMessage>}
              <button type="submit">Salvar alteração</button>
            </Form>
          </Container>
        </Box>
      </Modal>
    </div>
  );
};
