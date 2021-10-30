import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Content = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  div:last-child {
    display: flex;
    justify-content: center;

    @media screen and (min-width: 920px) {
      justify-content: flex-start;
    }
  }

  div > button {
    color: white;
    margin: 16px 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px 0;

    @media screen and (min-width: 720px) {
      flex-direction: row;
      justify-content: flex-start;
    }
  }

  li {
    flex-basis: 34%;
    display: flex;
    align-items: center;

    svg {
      margin-right: 12px;
    }
  }
`;

export const HireButton = styled(Link)`
  border-radius: 10px;
  background: transparent;
  font-size: 14px;
  padding: 12px 32px;
  outline: none;
  border: 1px solid var(--blue);
  cursor: pointer;
  color: #000;
  transition: all 0.2s ease-in-out;

  :hover {
    background: var(--blue);
    opacity: 0.8;
    color: #000;
    transition: all 0.2s ease-in-out;
  }

  .hire {
    margin: 0;
    color: #bfbfbf;
  }

  :hover > * {
    color: #000;
  }

  a {
    color: var(--blue);

    :hover {
      color: #000;
    }
  }

  @media screen and (min-width: 720px) {
    padding: 14px 48px;
  }
`;
