import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Dispatch, SetStateAction, useContext } from 'react';
import { B1400, H7500 } from '../../styles/typography';
import { Container } from './styles';
import { CommentContext } from '../../contexts/comment';

const style = {
  position: 'absolute' as 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '32.8125rem',
  width: '90%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface ModalDeleteCommentProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  id: string;
}

export const ModalDeleteComment = ({ openModal, setOpenModal, id }: ModalDeleteCommentProps) => {
  const { deleteComment } = useContext(CommentContext);

  return (
    <div>
      <Modal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container>
            <header>
              <H7500>Excluir Commentário</H7500>
              <span
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                X
              </span>
            </header>

            <main>
              <H7500>Tem certeza que deseja remover este comentário?</H7500>
              <B1400>
                Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá
                seus dados de nossos servidores.
              </B1400>

              <div>
                <button onClick={() => setOpenModal(false)}>cancelar</button>
                <button
                  onClick={() => {
                    deleteComment(id);
                    setOpenModal(false);
                  }}
                >
                  Sim, excluir comentário
                </button>
              </div>
            </main>
          </Container>
        </Box>
      </Modal>
    </div>
  );
};
