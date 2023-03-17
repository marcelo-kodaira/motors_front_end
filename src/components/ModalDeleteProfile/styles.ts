import styled from 'styled-components';

export const Container = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    span {
      color: ${({ theme }) => theme.grey4};
      cursor: pointer;
    }
  }

  main {
    margin-top: 2.6875rem;
    display: flex;
    flex-direction: column;
    gap: 1.5625rem;

    div {
      display: flex;
      justify-content: end;
      gap: 0.5625rem;

      button:first-child {
        padding: 0.75rem 0.625rem;
        background-color: ${({ theme }) => theme.grey6};
        color: ${({ theme }) => theme.grey2};
        border-radius: 0.25rem;
        border: none;

        font-family: 'Inter';
        font-weight: 600;
        font-size: 1rem;

        cursor: pointer;
      }

      button:last-child {
        padding: 0.75rem 0.625rem;
        background-color: ${({ theme }) => theme.alert2};
        color: ${({ theme }) => theme.alert1};
        border-radius: 0.25rem;
        border: none;

        font-family: 'Inter';
        font-weight: 600;
        font-size: 1rem;

        cursor: pointer;
      }
    }
  }
`;
