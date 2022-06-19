import styled from 'styled-components';

export const DateTimeContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  will-change: transform, opacity;
  z-index: 0;

  time {
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    flex-basis: 80%;
    color: var(--main-color);
    cursor: default;
    z-index: -1;

    span:first-child {
      margin: 0;
      font-size: 20px;
      font-weight: 600;
    }
  }
`;
