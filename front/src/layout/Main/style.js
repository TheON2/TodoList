import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    margin: 0
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace
  }
`;

export const LayOut = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px
`;
