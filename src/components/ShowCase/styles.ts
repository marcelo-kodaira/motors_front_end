import styled, { keyframes } from "styled-components";

export const ShowCaseStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & > div {
    display: flex;
    gap: 20px;
    justify-content: flex-start;
    width: 90%;
    overflow-x: scroll;
    padding-bottom: 10px;

    /* width */
    ::-webkit-scrollbar {
      height: 4px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: none;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: none;

      @media (min-width: 764px) {
        background: grey;
      }
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    & > div {
      & > p {
        font-family: "inter";
        font-size: 16px;
      }
    }

    & > h2 {
      text-align: start;
      padding: 40px 0px;
      font-family: "Lexend";
    }
  }
`;
