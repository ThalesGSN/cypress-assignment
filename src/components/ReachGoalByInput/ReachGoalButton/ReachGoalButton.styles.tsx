import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  width: 48px;
  height: 56px;
  border: none;
  cursor: pointer;
  background-color: var(--enabled-color);

  &:disabled {
    cursor: not-allowed;
    background-color: var(--background-color);
  }
`;
