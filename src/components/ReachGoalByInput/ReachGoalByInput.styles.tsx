import styled from 'styled-components';

export const InputContainer = styled.div`
  grid-area: ReachGoal;
  display: flex;
  flex-direction: column;

  font-size: 16px;
  font-weight: 500;
  span {
    margin-bottom: 8px;
    &:focus {
      border: 1px solid var(--primary-color);
      outline: none;
    }
  }

  article {
    overflow: hidden;
    display: flex;
    align-content: center;
  }

  .inputWrapper {
    display: flex;
    border: 1px solid #e1e8ed;
    border-radius: 4px;
    justify-content: space-between;
  }
`;
