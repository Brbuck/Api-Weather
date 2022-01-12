import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  body{
    min-height: 100vh;
    height: 100%;
    color: var(--color-black);
  }

  html {
    min-height: 100%;
    background: var(--color-white);
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Montserrat', -apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
  }
  :root {
    --color-black: #333;
    --color-white: #FFF;
    --color-gray-light: #E8E8E8;
    --color-blue: #0000CD;
    --color-red: #FF0000;
    --color-yellow: #CD950C;

  }
`;