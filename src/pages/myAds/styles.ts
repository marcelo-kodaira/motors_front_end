import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.grey8};
  min-height: 100vh;
`;

export const Standart = styled.div`
  background-color: ${({ theme }) => theme.brand1};
  padding: 0 1rem;
  margin-bottom: 193px;
`;

export const InfoAdvertiser = styled.div`
  background-color: ${({ theme }) => theme.grey10};
  padding: 2.75rem 2.5625rem;
  max-width: 1240px;
  margin: 0 auto;
  transform: translateY(4.6875rem);

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  div {
    display: flex;
    gap: 0.5625rem;
    align-items: center;

    span {
      background-color: ${({ theme }) => theme.brand4};
      padding: 0.25rem 0.5rem;
      color: ${({ theme }) => theme.brand1};
      border-radius: 0.25rem;

      font-family: 'Inter';
      font-weight: 500;
      font-size: 14px;
    }
  }

  button {
    padding: 0.75rem 0.875rem;
    background-color: transparent;
    border: 0.0938rem solid ${({ theme }) => theme.brand1};
    border-radius: 0.25rem;
    color: ${({ theme }) => theme.brand1};
    width: max-content;

    cursor: pointer;

    font-family: 'Inter';
    font-size: 1rem;
    font-weight: 600;
  }
`;
