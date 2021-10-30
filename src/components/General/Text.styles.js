import styled from 'styled-components';

export const Text = styled.div`
  h1,
  h2 {
    font-family: 'Playfair Display', serif;
  }

  h1 {
    text-align: left;
    text-transform: capitalize;
  }

  span {
    color: var(--blue);
  }

  color: #bfbfbf;
  text-align: justify;

  p {
    margin: 10px 0;
  }

  svg {
    color: var(--blue);
    filter: brightness(0.5);
  }

  hr {
    border-color: #bfbfbf;
    opacity: 0.3;
  }
`;
