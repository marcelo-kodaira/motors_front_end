import styled from "styled-components";

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

  .flex {
    display: flex;
    gap: 0.625rem;
  }

  .buttonGroup {
    display: flex;
    gap: 0.625rem;

    button {
      width: 100%;

      border-radius: 0.25rem;
      border: none;
      font-family: "Inter";
      font-size: 1rem;
      font-weight: 600;
      padding: 0.75rem 0.875rem;

      cursor: pointer;
    }

    button:first-child {
      background-color: ${({ theme }) => theme.grey6};
      color: ${({ theme }) => theme.grey2};
    }

    button:last-child {
      background-color: ${({ theme }) => theme.brand3};
      color: ${({ theme }) => theme.brand4};
    }
  }
`;
