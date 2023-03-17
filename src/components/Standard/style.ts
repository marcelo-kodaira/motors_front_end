import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.brand2};
  width: 100%;
  height: 600px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 90%;
    height: 350px;

    & > h1 {
      font-size: 36px;
      font-weight: 700;
      font-family: "Lexend";
      text-align: center;
      color: white;
    }
    & > p {
      font-size: 14px;
      font-weight: 400;
      font-family: "Inter";
      text-align: center;
      color: white;
    }

    @media (min-width: 764px) {
      & > h1 {
        font-size: 44px;
        font-weight: 700;
        font-family: "Lexend";
        text-align: center;
        color: white;
      }
      & > p {
        font-size: 16px;
        font-weight: 400;
        font-family: "Inter";
        text-align: center;
        color: white;
      }
    }
  }
  @media (min-width: 764px) {
    height: 581px;

    & > div {
      height: 300px;
      width: 40%;
    }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;

  & > button {
    border: 1px solid white;
    border-radius: 4px;
    color: white;
    background-color: ${({ theme }) => theme.brand2};
    padding: 12px 28px;
    font-weight: 600;
    margin: 10px;
  }
  @media (min-width: 764px) {
    flex-direction: row;

    & > button {
      width: 140px;
    }
  }
`;
