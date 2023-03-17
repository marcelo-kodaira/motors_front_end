import { styled } from '../../styles/stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  minWidth: '312px',
  maxWidth: '312px',

  '& .groupButton': {
    display: 'flex',
    gap: '10px',
  },

  '& .groupButton button': {
    padding: '0.25rem 0.5rem',
    border: '1.5px solid $grey1',
    borderRadius: '0.25rem',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  cursor: 'pointer',
});

export const Image = styled('div', {
  position: 'relative',
  img: {
    backgroundColor: '$grey7',
    width: '100%',
    height: '152px',
    objectFit: 'cover',
  },
  span: {
    position: 'absolute',
    top: '10px',
    left: '15px',
    padding: '5px',
    color: '$white',
    fontFamily: 'Inter',
    backgroundColor: '$grey4',
  },

  variants: {
    is_published: {
      true: {
        span: {
          backgroundColor: '$brand1',
        },
      },
    },
  },
});

export const Infos = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  // height: '100%',

  h2: {
    fontFamily: 'Lexend',
    fontSize: '16px',
    color: '$grey1',
    width: '100%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },

  p: {
    fontSize: '14px',
    height: '35px',
    color: '$grey2',
    fontFamily: 'Inter',
  },

  div: {
    display: 'flex',
    alignItems: 'baseline',
  },

  '#advertiser': {
    fontSize: '16px',
    color: '$grey2',
    fontWeight: 500,
    fontFamily: 'Inter',
  },
});

export const Details = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  '#mileage': {
    fontSize: '14px',
    color: '$brand1',
    fontWeight: 500,
    fontFamily: 'Inter',
    backgroundColor: '$brand4',
    padding: '5px',
    borderRadius: '4px',
    marginRight: '10px',
  },
  '#year': {
    fontSize: '14px',
    color: '$brand1',
    fontWeight: 500,
    fontFamily: 'Inter',
    backgroundColor: '$brand4',
    padding: '5px',
    borderRadius: '4px',
  },
  '#price': {
    fontSize: '16px',
    color: '$grey1',
    fontWeight: 500,
    fontFamily: 'Inter',
  },
});
