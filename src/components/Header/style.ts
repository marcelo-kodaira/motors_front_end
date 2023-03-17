import styled, { keyframes } from "styled-components";

const dropDown = keyframes`
  0%{
    top: -190px;
    opacity: 0;
  }
  100%{
    top: 0;
    opacity: 1;
  }
`;

export const ContainerHeader = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fdfdfd;
  border-bottom: 2px solid #dee2e6;
  background-color: #ffffff;

  z-index: 1;
  animation: ${dropDown} 1s forwards;

  #width {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
  }

  #width img {
    cursor: pointer;
  }

  & > img {
    width: 156px;
    height: 26px;
  }
`;

export const NavLinks = styled.div`
  display: none;
  align-items: center;
  gap: 20px;
  height: 100%;

  @media (min-width: 764px) {
    display: flex;
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 44px;
  border-right: 1px solid #dee2e6;
  padding-right: 44px;
  height: 100%;
  align-items: center;
  justify-content: center;

  & > p {
    cursor: pointer;
    :hover {
      color: ${({ theme }) => theme.grey3};
    }
  }
`;

export const NavButtons = styled.div`
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  height: 100%;
  display: flex;
  gap: 20px;

  .login {
    font-family: "Inter";
    font-weight: 600;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.brand1};

    cursor: pointer;
  }

  .register {
    background: transparent;
    border: 2px solid #dee2e6;
    padding: 15px;
    border-radius: 1rem;
    box-shadow: none;

    cursor: pointer;
  }

  button:hover p {
    color: ${({ theme }) => theme.grey3};
    border-color: ${({ theme }) => theme.grey3};
  }
`;

export const MenuWithoutUser = styled.nav`
  position: relative;

  cursor: pointer;

  svg {
    font-size: 3rem;
  }

  div {
    display: none;
    position: absolute;
    top: 20px;
    right: 0;
    width: max-content;

    background-color: ${({ theme }) => theme.grey9};
    border-radius: 0.25rem;
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;

      li {
        font-family: "Inter";
        font-weight: 400;
        color: ${({ theme }) => theme.grey2};
        padding: 1rem 3.625rem 1rem 1.375rem;
      }
      li:hover {
        background-color: ${({ theme }) => theme.grey4};
      }
    }
  }
  &:hover div {
    display: flex;
  }

  @media (min-width: 764px) {
    display: none;
  }
`;

export const MenuWithUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  #name {
    font-family: "Inter";
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.grey2};
  }

  div {
    display: none;
    position: absolute;
    top: 20px;
    right: 0;
    width: max-content;

    background-color: ${({ theme }) => theme.grey9};
    border-radius: 0.25rem;
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;

      li {
        font-family: "Inter";
        font-weight: 400;
        color: ${({ theme }) => theme.grey2};
        padding: 1rem 3.625rem 1rem 1.375rem;
        cursor: pointer;
      }
      li:hover {
        background-color: ${({ theme }) => theme.grey4};
      }
    }
  }
  &:hover div {
    display: flex;
  }
`;
