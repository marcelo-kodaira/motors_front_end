import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Dispatch, SetStateAction, useContext } from 'react';
import { B1400, H7500 } from '../../styles/typography';
import { Container } from './styles';
import { AuthContext } from '../../contexts/auth';

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

interface ModalDeleteProfileProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  id: string;
}

export const ModalDeleteProfile = ({ openModal, setOpenModal, id }: ModalDeleteProfileProps) => {
  const { deleteProfile } = useContext(AuthContext);

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
              <H7500>Excluir Conta</H7500>
              <span
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                X
              </span>
            </header>

            <main>
              <H7500>Tem certeza que deseja excluir sua conta?</H7500>
              <B1400>
                Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá
                seus dados de nossos servidores.
              </B1400>

              <div>
                <button onClick={() => setOpenModal(false)}>cancelar</button>
                <button
                  onClick={() => {
                    deleteProfile(id);
                    setOpenModal(false);
                  }}
                >
                  Sim, excluir conta
                </button>
              </div>
            </main>
          </Container>
        </Box>
      </Modal>
    </div>
  );
};
