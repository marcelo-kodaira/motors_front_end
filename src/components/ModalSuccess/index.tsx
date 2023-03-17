import Box from '@mui/material/Box';
import { Button } from '../../pages/register/styles';
import Modal from '@mui/material/Modal';
import { Dispatch, SetStateAction, useState } from 'react';
import { B1400, H7500 } from '../../styles/typography';
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';

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

interface ModalSuccessProps {
  variant?: 'registro';
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

export const ModalSuccess = ({ variant, openModal, setOpenModal }: ModalSuccessProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setOpenModal(false);
    navigate('/login', { replace: true });
  };

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
              <H7500>Sucesso</H7500>
              <span
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                X
              </span>
            </header>
            <main>
              <H7500>
                {variant == 'registro'
                  ? 'Sua conta foi criada com sucesso!'
                  : 'Seu anúncio foi criado com sucesso!'}
              </H7500>
              <B1400>Agora você poderá ver seus negócios crescendo em grande escala</B1400>
              {variant == 'registro' && <button onClick={handleClick}>Ir para o login</button>}
            </main>
          </Container>
        </Box>
      </Modal>
    </div>
  );
};
