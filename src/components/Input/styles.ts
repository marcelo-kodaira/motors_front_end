import { styled } from '../../styles/stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  width: '100%',
  input: {
    padding: '12px',
    border: '0.0938rem solid $grey7',
    outline: 'none',
    borderRadius: '0.25rem',
    width: '100%',
  },

  'input:hover': {
    backgroundColor: '$grey8',
  },

  'input:focus': {
    border: '0.0938rem solid $brand2',
    backgroundColor: '$white',
  },

  'input[type="textarea"]': {
    resize: 'none',
  },

  // span: {
  //   fontSize: '0.75rem',
  //   color: '$alert1',
  // },

  variants: {
    error: {
      true: {
        input: {
          border: '0.0938rem solid $alert1',
        },
      },
    },
  },
});

export const ErrorMessage = styled('span', {
  fontSize: '0.75rem',
  color: '$alert1',
});
