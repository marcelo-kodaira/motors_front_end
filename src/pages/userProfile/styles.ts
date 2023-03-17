import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #4529e6 277px, #f1f3f5 277px);
  padding: 4.0625rem 1rem;
`;

export const Banner = styled.div`
  max-width: 77.5rem;
  background-color: ${({ theme }) => theme.grey10};
  padding: 2.75rem 2.5625rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  margin: 0 auto;

  div {
    display: flex;
    gap: 0.5625rem;

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
`;
