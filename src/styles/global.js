import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
}
body, html {
  background: #E5E5E5;
}
p{
  height: auto;
  color: #4F4F40;
  line-height: 26px;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.03em;
  font-family: 'PT Sans', sans-serif;
}
h1{
  height: auto;
  font-size: 38px;
  line-height: 45px;
  font-weight: bold;
  font-style: normal;
  align-items: center;
  font-family: 'Commissioner', sans-serif;
}
`;
