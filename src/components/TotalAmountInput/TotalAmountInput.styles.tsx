import styled from 'styled-components';

export const InputContainer = styled.label`
  grid-area: TotalAmount;

  display: flex;
  flex-direction: column;

  font-size: 16px;
  font-weight: 500;

  span {
    margin-bottom: 8px;
    small {
      font-size: 0.5rem;
      opacity: 0.7;
    }
  }
  .masked-input {
    -webkit-appearance: none;
    outline: none;
    background: none;
    border: none;
    margin-left: 15px;
    color: var(--main-color);
    font-weight: 600;
    font-size: 18px;
    flex: 3;
  }

  .iconArea {
    flex: 1;
    background-color: var(--background-color);
    display: flex;
    align-content: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    span {
      color: #657786;
      position: relative;
      top: 50%;
      margin-top: -10px;
      font-weight: 400;
      font-size: 22px;
    }
  }
  .inputWrapper {
    display: grid;
    grid-template-columns: 56px auto;
    border: 1px solid #e1e8ed;
    border-radius: 4px;
  }
`;
