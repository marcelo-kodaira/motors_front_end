import { styled } from '../../styles/stitches.config';

export const Container = styled('div', {
  backgroundColor: '$grey8',
  padding: '1rem',
});

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  backgroundColor: '$grey10',
  padding: '2.75rem 1.75rem',
  maxWidth: '25.6875rem',
  margin: '0 auto',

  '& .flex': {
    display: 'flex',
    gap: '0.5625rem',
  },
});

export const Button = styled('button', {
  backgroundColor: '$brand1',
  border: '0.0938rem solid $brand1',
  borderRadius: '0.25rem',
  padding: '1.5rem',
  color: '$white',
  fontFamily: 'Inter',
  fontSize: '1rem',
  fontWeight: 600,
  width: '100%',

  cursor: 'pointer',
});
