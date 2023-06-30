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

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const TotalContainer = styled.div`
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
  height: 50%;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25),
  0 10px 10px rgba(0,0,0,0.22);
  margin-top: 50px;
  margin-left: 25px;
`;

export const LayOut = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px
`;
