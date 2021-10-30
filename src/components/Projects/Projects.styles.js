import styled from 'styled-components';

export const List = styled.li`
  position: relative;
  padding: 36px 0;

  .start {
    @media screen and (min-width: 720px) {
      > .project-image {
        grid-column: 9 / 1;
      }

      > .project-desc {
        grid-column: 13 / 6;
        text-align: right;
      }
    }
  }

  .finish {
    @media screen and (min-width: 720px) {
      > .project-desc {
        grid-column: 9 / 1;
        text-align: left;
      }

      > .project-image {
        grid-column: 13 / 6;
      }
    }
  }
`;

export const Content = styled.div`
  .display {
    display: block;
  }

  .none {
    display: none;
  }

  @media screen and (min-width: 720px) {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
  }
  .button-website {
    border: none;
    padding: 0;

    :hover {
      background: none;
      > * {
        color: #bfbfbf;
      }
    }

    > a {
      .display {
        display: block;
      }

      .none {
        display: none;
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
  }

  .project-image {
    border-radius: 12px;
    filter: brightness(0.2);

    @media screen and (min-width: 720px) {
      grid-row: 1;
      position: unset;
      background: var(--blue);
      background-size: cover;
      filter: brightness(0.5);
      transition: all 0.5s ease-in-out;

      :hover {
        filter: brightness(1);
        transition: all 0.5s ease-in-out;
      }
    }
  }

  .project-desc {
    @media screen and (min-width: 720px) {
      grid-row-start: 1;
      grid-column: ${({ imgStart }) => (imgStart ? '13 / 6' : '9 / 1')};
      z-index: 2;
      text-align: ${({ imgStart }) => (imgStart ? 'right' : 'left')};
    }
  }

  .desc {
    @media screen and (min-width: 720px) {
      background: #112240;
      border-radius: 16px;
      padding: 12px;
    }
  }

  img {
    max-width: 100%;
    opacity: 0.5;
    display: block;
    border-radius: 12px;

    @media screen and (min-width: 720px) {
      transition: all 0.5s ease-in-out;

      :hover {
        opacity: 1;
        transition: all 0.5s ease-in-out;
      }
    }
  }

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0;

    position: absolute;
    top: -50%;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 100%;

    @media screen and (min-width: 720px) {
      display: block;
      position: unset;
    }
  }

  h2 a {
    color: #bfbfbf;
    font-size: 1.5rem;

    /* undeline animation */
    position: relative;

    :after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--blue);
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }

    :hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

export const Tags = styled.div`
  word-spacing: 24px;
  margin: 20px 0;
  > * {
    font-size: 0.8rem;
  }
`;
