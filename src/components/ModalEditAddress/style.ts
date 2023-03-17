import styled from "styled-components";

export const FormStyle = styled.form`
  & > div {
    display: flex;
    justify-content: space-between;
    position: relative;

    & > h2 {
      font-family: "Lexend";
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 40px;
      color: ${({ theme }) => theme.grey1};
    }

    & > button {
      position: absolute;
      background-color: white;
      font-family: "Inter";
      font-weight: 400;
      font-size: 2rem;
      width: max-content;
      border: none;
      cursor: pointer;
      color: ${({ theme }) => theme.grey3};

      transform: rotate(45deg);
      top: -10px;
      right: -10px;
    }
  }
  & > h3 {
    font-family: "Inter";
    font-size: 14px;
    margin-bottom: 25px;
  }

  & > section {
    display: flex;
    justify-content: end;
    align-items: flex-end;
    margin-top: 30px;

    & > button {
      width: 45%;

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
      width: 30%;
      margin-right: 10px;
    }

    button:last-child {
      background-color: ${({ theme }) => theme.brand2};
      color: ${({ theme }) => theme.brand4};
    }
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;

  gap: 25px;

  & > div {
    display: flex;
    justify-content: space-between;

    gap: 10px;
  }
`;

export const Success = styled.h2`
  font-family: "Lexend";
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.sucess1};
  padding: 20px 0px;
  text-align: center;
`;

export const Fail = styled.h2`
  font-family: "Lexend";
  font-size: 18px;
  font-weight: 400;
  color: red;
  padding: 20px 0px;
  text-align: center;
`;
