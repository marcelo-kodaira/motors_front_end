import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.grey8};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  background-color: "$grey10";
  max-width: 25.6875rem;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.grey5};
  border-radius: 4px;
  padding: 50px;
  background-color: ${({ theme }) => theme.white};

  & > h2 {
    font-family: "Lexend";
    text-align: center;
    font-size: 18px;
  }

  & > button {
    width: 100%;

    border-radius: 0.25rem;
    border: none;
    font-family: "Inter";
    font-size: 1rem;
    font-weight: 600;
    padding: 0.75rem 0.875rem;

    cursor: pointer;
  }

  & > p {
    font-family: "Inter";
    text-align: center;
    font-size: 16px;
    color: ${({ theme }) => theme.sucess1};
  }
`;
