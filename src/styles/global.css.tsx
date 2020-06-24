import { createGlobalStyle } from "styled-components";
import { Color } from "./variables";

export default createGlobalStyle`
  body {
    margin: 0;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: ${Color.green1};
  }

  a {
    text-decoration: none;
  }

  .visually-hidden {
    position: absolute;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap; /* added line */
  }
`;
