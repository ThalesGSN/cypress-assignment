import styled from 'styled-components';
import { IsDesktopMediaQuery } from '../../utils/constants';

export const Card = styled.section`
  background-color: var(--foreground-color);
  border-radius: 16px 16px 0 0;
  box-shadow: 0 2px 16px rgba(225, 232, 237, 0.8);
  place-self: stretch;
  padding: 33px 16px;

  display: grid;
  grid-template-rows: 20% 15% 15% 150px minmax(5vh, auto);
  grid-template-columns: 100%;
  row-gap: 10px;
  grid-template-areas:
    'Header'
    'TotalAmount'
    'ReachGoal'
    'Result'
    'Confirm';

  ${IsDesktopMediaQuery} {
    grid-template-rows: 25% 20% 30% 25%;
    grid-template-columns: 50% 50%;

    column-gap: 15px;
    row-gap: 5px;
    padding: 40px;
    grid-template-areas:
      'Header Header'
      'TotalAmount ReachGoal'
      'Result Result'
      'Confirm Confirm';
    border-radius: 8px;
  }
`;

export const CardHeader = styled.section`
  display: flex;
  flex-direction: column;
  grid-area: Header;
  h3 {
    font-weight: 600;
    margin: 5px 0;
  }

  img {
    width: 32px;
  }

  .label {
    color: var(--contrast-color);
    font-size: 14px;
  }
  ${IsDesktopMediaQuery} {
    img {
      width: 40px;
    }
    .label {
      font-size: 16px;
    }
  }
`;

export const ConfirmButton = styled.button`
  grid-area: Confirm;
  place-self: center;
  width: 100%;
  max-width: 400px;
  height: 55px;
  border: none;
  border-radius: 32px;
  font-weight: 600;
  color: var(--foreground-color);
  background-color: var(--primary-color);
`;
ConfirmButton.displayName = 'ConfirmButton';
