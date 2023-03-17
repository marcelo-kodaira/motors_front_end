import styled, { css, keyframes } from "styled-components";

const dropUp = keyframes`
  0%{
    bottom: -300px;
    opacity: 0;
  }
  100%{
    bottom: 0;
    opacity: 1;
  }
`;

export const Container = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  max-height: 200px;
  background-color: ${({ theme }) => theme.grey0};

  animation: ${dropUp} 1s forwards;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    width: 90%;
    height: 200px;

    padding: 30px 0px;

    & > p {
      color: ${({ theme }) => theme.white};
      font-size: 14px;
    }

    & > button {
      width: 50px;
      height: 50px;
      background-color: ${({ theme }) => theme.grey1};
      border: "none";
      border-radius: 4px;
    }
  }
  @media (min-width: 764px) {
    & > div {
      flex-direction: row;
      padding: 0px;
      height: 140px;
    }
  }

  #logotipo {
    width: 153px;
    height: 23px;
  }
`;
