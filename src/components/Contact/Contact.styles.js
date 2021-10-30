import styled from 'styled-components';

export const Content = styled.div`
  height: 100vh;
  padding: 200px 0;

  > * {
    @media screen and (min-width: 720px) {
      /* display: flex;
      justify-content: space-between;
      flex-wrap: wrap; */
      display: block;
    }
  }

  h1 {
    text-align: center;
    text-transform: none;
  }

  .modal {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2rem;
    background: #40807f;
    border-radius: 4px;
    padding: 8px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    padding: 24px 0;
    margin: 20px 10%;
    text-align: center;

    @media screen and (min-width: 720px) {
      margin: 0;
      flex-basis: 48%;
    }
  }

  form div {
    margin: 24px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
  }

  label {
    padding-right: 16px;
    font-size: 0.8rem;
  }

  input,
  textarea {
    background: transparent;
    border: none;
    border-bottom: 1px solid #bfbfbf;
    width: 150%;

    @media screen and (min-width: 720px) {
      width: 200%;
    }

    :active {
      border: none;
    }
  }

  button {
    color: white;
  }

  .video video {
    width: 100%;
  }
`;
