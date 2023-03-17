import styled, { keyframes } from "styled-components";

const load = keyframes`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    #4529e6 31.25%,
    #f1f3f5 31.26%,
    #f1f3f5 100%
  );
  padding: 2.8125rem 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.125rem;

  animation: ${load} 1.2s forwards;

  @media (min-width: 764px) {
    & > div {
      display: none;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
  max-width: 77.3125rem;
  margin: 0 auto;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1.0625rem;

    div:last-child {
      display: none;
    }
  }

  .corverImg {
    background-color: ${({ theme }) => theme.grey10};
    text-align: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (min-width: 764px) {
    flex-direction: row;
    gap: 2.875rem;

    & > div {
      min-width: 55%;

      div:last-child {
        display: flex;
      }
    }
  }
`;

export const VehicleInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.75rem;
  background-color: ${({ theme }) => theme.grey10};

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .spanGroup {
    display: flex;
    gap: 0.75rem;

    span {
      padding: 0.25rem 0.5rem;
      background-color: ${({ theme }) => theme.brand4};
      border-radius: 0.25rem;

      color: ${({ theme }) => theme.brand1};
      font-family: "Inter";
      font-size: 0.875rem;
      font-weight: 500;
    }
  }

  button {
    background-color: ${({ theme }) => theme.brand1};
    padding: 8px 10px;
    border: none;
    border-radius: 4px;

    color: ${({ theme }) => theme.white};
    font-family: "Inter";
    font-size: 0.875rem;
    font-weight: 600;

    width: max-content;

    cursor: pointer;
  }

  @media (min-width: 764px) {
    & > div {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const VehicleDescription = styled.div`
  background-color: ${({ theme }) => theme.grey10};
  padding: 2.25rem 1.75rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 52px;
`;

export const Gallery = styled.div`
  background-color: ${({ theme }) => theme.grey10};
  padding: 36px 44px;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  ul {
    list-style: none;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 14px;

    li {
      background-color: ${({ theme }) => theme.grey7};
      text-align: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

export const AdvertiserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  align-items: center;

  background-color: ${({ theme }) => theme.grey10};
  padding: 2.3125rem;

  button {
    background-color: ${({ theme }) => theme.grey0};
    padding: 8px 10px;
    border: none;
    border-radius: 4px;

    color: ${({ theme }) => theme.white};
    font-family: "Inter";
    font-size: 1rem;
    font-weight: 600;

    width: max-content;

    cursor: pointer;
  }
`;
