import styled from 'styled-components';
import { IsDesktopMediaQuery } from '../../utils/constants';

export const Container = styled.main`
  display: grid;
  place-self: stretch;
  grid-template-rows: 10% auto;
  grid-template-columns: 100%;
  justify-content: center;

  font-size: 18px;
  grid-area: 2 / 1 / 3 / 2;

  ${IsDesktopMediaQuery} {
    grid-area: 2 / 3 / 2 / 3;
    grid-column: 2;
    font-size: 24px;
    grid-template-rows: 10vh auto;
  }

  p.title {
    color: var(--primary-color);
    text-align: center;
    font-weight: 400;
    animation-name: TitleStart;
    animation-duration: 500ms;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    place-self: center;

    strong {
      font-weight: 600;
    }
  }

  section {
    animation-name: ContainerStart;
    animation-duration: 500ms;
    animation-iteration-count: 1;
    animation-timing-function: linear;
  }

  @keyframes ContainerStart {
    from {
      transform: translateY(30px);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes TitleStart {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
