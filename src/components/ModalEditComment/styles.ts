import styled from 'styled-components';

interface FormProps {
  error: boolean;
}

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
`;

export const Form = styled.form<FormProps>`
  textarea {
    resize: none;
    height: 150px;
    width: 100%;
    padding: 0.5rem;
    outline: none;

    &:focus {
      border: 0.0938rem solid ${({ theme, error }) => (error ? theme.alert1 : theme.brand1)};
    }
  }

  button {
    margin-top: 0.5625rem;
    width: 100%;
    background-color: ${({ theme }) => theme.brand1};
    color: ${({ theme }) => theme.white};
    padding: 0.25rem 0.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;
