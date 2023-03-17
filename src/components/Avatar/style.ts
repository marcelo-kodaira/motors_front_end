import { styled } from '../../styles/stitches.config';

export const MaterialUI = styled('span', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$brand1',
  fontSize: '14px',
  color: '$white',
  borderRadius: '50%',
  fontFamily: 'Inter',
  padding: '8px',
  fontWeight: 500,
  marginRight: '10px',
  width: '32px',
  height: '32px',

  variants: {
    variant: {
      big: {
        fontSize: '36px',
        width: '104px',
        height: '104px',
      },
    },
  },
});
