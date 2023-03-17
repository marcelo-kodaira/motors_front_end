import styled from 'styled-components';

export const AuctionContainer = styled.div``;

export const AuctionArticle = styled.article`
  width: 46%;
  min-width: 20.5rem;
  max-width: 45.9375rem;
  border-radius: 0.3125rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`;

export const AuctionImage = styled.section`
  position: relative;
  flex: 1;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AuctionTime = styled.div`
  background-color: ${({ theme }) => theme.white};
  padding: 0.5rem;
  color: blue;
  padding: 0.6rem;
  width: fit-content;
  border-radius: 2rem;
  display: flex;
  gap: 1.25rem;
  h6 {
    color: ${({ theme }) => theme.grey1};
  }
`;

export const AuctionText = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  color: white;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
  padding: 1.5rem 2.25rem;

  & > h6 {
    color: ${({ theme }) => theme.white};
  }

  p {
    color: ${({ theme }) => theme.grey5};
  }

  .avatar {
    display: none;
    p {
      color: ${({ theme }) => theme.white};
    }
  }

  .price {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    h6 {
      color: ${({ theme }) => theme.white};
    }
  }

  .price > div {
    display: flex;
    gap: 0.75rem;
  }
  .price > div p {
    color: ${({ theme }) => theme.brand1};
    padding: 0.25rem 0.5rem;
    background-color: ${({ theme }) => theme.brand4};
    border-radius: 0.25rem;
  }

  @media (min-width: 764px) {
    .avatar {
      display: flex;
      align-items: center;
    }

    .price {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const AuctionFooter = styled.div`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.white};
  width: 100%;
  background-color: ${({ theme }) => theme.brand1};
  padding: 1.875rem 1.375rem;

  svg {
    color: ${({ theme }) => theme.white};
    font-size: 26px;
  }
`;

export const AuctionFooterAdvertiser = styled.div`
  display: flex;
  justify-content: start;
  gap: 1rem;
  background-color: ${({ theme }) => theme.brand1};
  padding: 1.875rem 1.375rem;

  button {
    border: 0.0938rem solid ${({ theme }) => theme.grey10};
    border-radius: 0.25rem;
    color: ${({ theme }) => theme.grey10};
    background-color: transparent;
    padding: 1.1875rem 1.25rem;

    font-family: 'Inter';
    font-weight: 600;
    font-size: 0.875rem;

    cursor: pointer;
  }
`;
