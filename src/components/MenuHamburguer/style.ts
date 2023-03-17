import styled, { css, keyframes } from "styled-components";

interface IStyledProps {
  isHamburguerMenu: boolean;
}

const open = keyframes`
  0%{
    left: 0px;
    opacity: 1;
  }
  100%{
    left: -50px;
    opacity: 0;
  }
`;

const close = keyframes`
  0%{
    left: -50px;
    opacity: 0;
  }
  100%{
    left: 0px;
    opacity: 1;
  }
`;

const gira45 = keyframes`
  0%{
    transform: rotate(0deg);
    top: 0;
  }
  100%{
    transform: rotate(45deg);
    top: 8px;
  }
`;

const gira0 = keyframes`
  0%{
    transform: rotate(45deg);
    top: 8px;
  }
  100%{
    transform: rotate(0deg);
    top: 0px;
  }
`;

const gira90 = keyframes`
  0%{
    transform: rotate(0deg);
    top: 0px;
  }
  100%{
    transform: rotate(-45deg);
    top: -8px;
  }
`;

const gira00 = keyframes`
  0%{
    transform: rotate(-45deg);
    top: -8px;
  }
  100%{
    transform: rotate(0deg);
    top: 0px;
  }
`;

export const Hamburguer = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: none;
  background-color: white;

  .bar1,
  .bar2,
  .bar3 {
    position: relative;
    width: 20px;
    height: 4px;
    background-color: ${({ theme }) => theme.grey1};
  }

  .bar1 {
    ${({ isHamburguerMenu }: IStyledProps) =>
      css`
        animation: ${isHamburguerMenu ? gira45 : gira0} 0.5s forwards;
      `}
  }

  .bar2 {
    ${({ isHamburguerMenu }: IStyledProps) =>
      css`
        animation: ${isHamburguerMenu ? open : close} 0.5s forwards;
      `}
  }

  .bar3 {
    ${({ isHamburguerMenu }: IStyledProps) =>
      css`
        animation: ${isHamburguerMenu ? gira90 : gira00} 0.5s forwards;
      `}
  }
`;
