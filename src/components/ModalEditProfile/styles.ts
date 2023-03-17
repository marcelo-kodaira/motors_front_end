import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.125rem;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    span {
      color: ${({ theme }) => theme.grey4};
      cursor: pointer;
    }
  }

  .groupButton {
    display: flex;
    gap: 0.625rem;
    justify-content: flex-end;

    button {
      padding: 0.75rem 0.875rem;
      font-family: 'Inter';
      font-weight: 600;
      font-size: 1rem;
      width: max-content;
      border: none;
      border-radius: 0.25rem;
      cursor: pointer;
    }

    button:first-child {
      background-color: ${({ theme }) => theme.grey6};
      color: ${({ theme }) => theme.grey2};
    }

    button:last-child {
      background-color: ${({ theme }) => theme.brand1};
      color: ${({ theme }) => theme.white};
    }
  }
`;
