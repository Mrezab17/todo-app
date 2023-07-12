import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  align-content: center;
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  transition: opacity 200ms ease;
}
`;

export default GlobalStyles;
