import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html, body {
  height: auto;
  min-height: 100%;
  margin: 0;
  font-family: Roboto;
  background-color: #000;
  font-family: industry, sans-serif;
}
#root {
  height: auto;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
