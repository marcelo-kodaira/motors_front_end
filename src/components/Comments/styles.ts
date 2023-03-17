import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
  .comments {
    background-color: ${({ theme }) => theme.grey10};
    padding: 2.25rem 2.75rem;
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 44px;

      li {
        display: flex;
        flex-direction: column;
        gap: 24px;
        div {
          display: flex;
          gap: 0.5rem;
          align-items: baseline;
        }
      }
    }

    .time {
      color: ${({ theme }) => theme.grey3};
      font-family: 'Inter';
      font-size: 0.75rem;
      font-weight: 400;
    }

    .comment {
      display: flex;
      p {
        flex: 1;
      }

      .buttonGroup {
        display: flex;
        flex-direction: column;
        gap: 0.625rem;
        width: max-content;

        button {
          width: 100%;
          padding: 4px 8px;
          font-family: 'Inter';
          font-weight: 500;
          font-size: 0.875rem;

          border: none;
          border-radius: 0.25rem;

          cursor: pointer;

          svg {
            height: 100%;
          }
        }

        button:first-child {
          color: ${({ theme }) => theme.grey1};
          background-color: #ffc107;
        }

        button:last-child {
          color: ${({ theme }) => theme.white};
          background-color: #dc3545;
        }
      }
    }
  }
`;
