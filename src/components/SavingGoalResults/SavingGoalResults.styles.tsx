import styled from 'styled-components';
import { IsDesktopMediaQuery } from '../../utils/constants';

export const ResultsContainer = styled.section`
  display: grid;
  grid-template-rows: 50% 50%;
  grid-area: Result;

  border: 1px solid #e1e8ed;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(150, 164, 176, 0.1);
  ${IsDesktopMediaQuery} {
    grid-template-rows: 60% 40%;
  }
`;

export const AmountContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 18px;
    span {
      flex-basis: 33%;
    }
    mark {
      flex-basis: 33%;
      font-weight: 500;
      font-size: 25px;
      text-align: end;
      color: var(--secondary-color);
      background-color: transparent;
      ${IsDesktopMediaQuery} {
        font-size: 40px;
      }
`;

export const AmountSpan = styled.span`
  display: none;
  ${IsDesktopMediaQuery} {
    display: inline;
  }
`;

export const ResultsDetails = styled.details`
  display: flex;
  align-items: center;
  background-color: var(--background-color);
  font-size: 12px;
  text-align: justify;
  align-self: stretch;
  justify-self: stretch;
  padding: 0 32px;
  summary {
    display: none;
    list-style-type: none; /* Firefox */
    &::-webkit-details-marker {
      display: none; /* Chrome */
    }
  }
  .finalDate {
    white-space: nowrap;
  }
`;
