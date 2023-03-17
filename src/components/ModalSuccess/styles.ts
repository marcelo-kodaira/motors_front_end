import styled from 'styled-components';

export const Container = styled.div`
  header {
    display: flex;
    justify-content: space-between;

    span {
      cursor: pointer;
    }
  }

  main {
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.125rem;

    button {
      padding: 1.1875rem 1.25rem;
      border-radius: 0.25rem;
      background-color: ${({ theme }) => theme.brand1};
      color: ${({ theme }) => theme.white};
      font-weight: 600;
      font-family: 'Inter';
      width: fit-content;
      cursor: pointer;
    }
  }
`;
