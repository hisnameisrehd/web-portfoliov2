import styled from 'styled-components';

export const Button = styled.button`
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
