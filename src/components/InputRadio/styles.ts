import { styled } from '../../styles/stitches.config';

export const Container = styled('div', {
  width: '100%',
  label: {
    display: 'block',
    textAlign: 'center',
    padding: '0.75rem',
    backgroundColor: '$white',
    cursor: 'pointer',
    border: '0.0938rem solid $grey4',
    borderRadius: '0.5rem',
    color: '$grey0',
    fontFamily: 'Inter',
    fontWeight: 600,
  },

  input: {
    display: 'none',
  },

  'input:checked + label': {
    backgroundColor: '$brand1',
    color: '$white',
    border: '1.5px solid $brand1',
  },
});
